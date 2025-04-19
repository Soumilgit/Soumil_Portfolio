import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();


  const aspectRatio = window.innerWidth / window.innerHeight;
  const baseRadius = 0.85; 
  const scaleY = aspectRatio < 1.0 ? 0.4 * (1 / aspectRatio) : 1.0;


  const pointCount = window.innerWidth < 768 ? 7500 : 3300;

  // Generate stars inside a virtual sphere
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(pointCount * 3), { radius: baseRadius });
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] *= scaleY;
    }
    return positions;
  });

  useFrame((state, delta) => {
    const rotationSpeedX = delta / 18;
    const rotationSpeedY = delta / 22;
    ref.current.rotation.x -= rotationSpeedX;
    ref.current.rotation.y -= rotationSpeedY;
  });

  let starSize = 0.00075 / window.devicePixelRatio;
  if (window.innerWidth < 768) {
    starSize *= 0.54;
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={starSize}
          sizeAttenuation
          depthWrite={false}
          opacity={0.4} 
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowStars(scrollPosition > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
      {showStars && (
        <Canvas camera={{ position: [0, 0, 0.4] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
