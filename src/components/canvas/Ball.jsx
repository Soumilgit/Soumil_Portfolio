import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture, Preload, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [texture] = useTexture([imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={2.5}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 3, 4]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.5}>
        <boxGeometry args={[1.3, 1.3, 1.3]} />
        <meshStandardMaterial 
          map={texture} 
          emissive={"#ffffff"} 
          emissiveIntensity={0.02} 
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
