import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "transparent",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "rgba(241, 241, 241, 0.7)", // Fixes text being fully transparent
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(1)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
