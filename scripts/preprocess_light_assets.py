import argparse
import shutil
from pathlib import Path
import numpy as np

from PIL import Image, ImageEnhance, ImageOps, ImageSequence, UnidentifiedImageError
try:
    import pillow_avif
except ImportError:
    pass


DEFAULT_ASSETS = [
    "src/assets/what.avifs",
]


def ensure_output_path(source, output_root):
    source_path = Path(source)
    try:
        relative = source_path.relative_to(Path("src/assets"))
    except ValueError:
        relative = source_path.name

    output_path = output_root / relative
    output_path.parent.mkdir(parents=True, exist_ok=True)
    return output_path


def preserve_green_greyscale(image):
    arr = np.array(image.convert("RGBA"))
    
    R = arr[:, :, 0].astype(np.float32)
    G = arr[:, :, 1].astype(np.float32)
    B = arr[:, :, 2].astype(np.float32)
    
    # Identify aurora pixels based on green excess
    green_excess = G - (R + B) / 2.0
    w_aurora = np.clip(green_excess / 45.0, 0.0, 1.0)
    
    # Identify stars: bright white/grey pixels (not green)
    min_val = np.minimum(np.minimum(R, G), B)
    w_star = np.clip((min_val - 15.0) / 35.0, 0.0, 1.0) * (1.0 - w_aurora)
    
    # Colors
    bg_color = 246.0
    aurora_color = 135.0
    star_color = 80.0
    
    # Map pixel values
    grey_mapped = bg_color * (1.0 - w_aurora) * (1.0 - w_star) + \
                  aurora_color * w_aurora * (1.0 - w_star) + \
                  star_color * w_star
    
    arr[:, :, 0] = np.clip(grey_mapped, 0, 255).astype(np.uint8)
    arr[:, :, 1] = np.clip(grey_mapped, 0, 255).astype(np.uint8)
    arr[:, :, 2] = np.clip(grey_mapped, 0, 255).astype(np.uint8)
    
    out_image = Image.fromarray(arr, "RGBA")
    return out_image


def logo_light_variant(image):
    rgba = image.convert("RGBA")
    rgb = rgba.convert("RGB")
    grey = ImageOps.grayscale(rgb)
    grey = ImageOps.autocontrast(grey)
    grey = ImageEnhance.Contrast(grey).enhance(0.72)
    grey = ImageEnhance.Brightness(grey).enhance(1.18)
    toned = ImageOps.colorize(grey, black="#2f3430", white="#f8faf8").convert("RGBA")
    toned.putalpha(rgba.getchannel("A"))
    return toned


def process_image(source, destination):
    try:
        im = Image.open(source)
        if Path(source).name == "what.avifs":
            is_animated = getattr(im, "is_animated", False)
            if is_animated:
                print(f"Processing animated AVIF ({im.n_frames} frames)...")
                frames = []
                for frame in ImageSequence.Iterator(im):
                    processed_frame = preserve_green_greyscale(frame)
                    frames.append(processed_frame)
                
                print("Saving animated AVIF output...")
                frames[0].save(
                    destination,
                    save_all=True,
                    append_images=frames[1:],
                    duration=40,
                    loop=0,
                    quality=55
                )
            else:
                output = preserve_green_greyscale(im)
                output.save(destination)
        else:
            output = logo_light_variant(im)
            output.save(destination)
        return destination
    except UnidentifiedImageError:
        destination = destination.with_suffix(Path(source).suffix)
        shutil.copy2(source, destination)
        return destination


def main():
    parser = argparse.ArgumentParser(
        description="Generate light-mode image variants for the portfolio."
    )
    parser.add_argument(
        "--output",
        default="src/assets/light-mode",
        help="Directory for generated light-mode assets.",
    )
    parser.add_argument(
        "--assets",
        nargs="*",
        default=DEFAULT_ASSETS,
        help="Image paths to preprocess. Non-raster files are copied.",
    )
    args = parser.parse_args()

    output_root = Path(args.output)
    output_root.mkdir(parents=True, exist_ok=True)

    for asset in args.assets:
        source = Path(asset)
        if not source.exists():
            print(f"skip missing: {source}")
            continue

        destination = ensure_output_path(source, output_root)
        if source.suffix.lower() in {".png", ".jpg", ".jpeg", ".avif", ".avifs", ".webp"}:
            written = process_image(source, destination)
        else:
            shutil.copy2(source, destination)
            written = destination
        print(f"{source} -> {written}")


if __name__ == "__main__":
    main()
