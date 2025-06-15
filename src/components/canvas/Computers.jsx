import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, shouldAutoRotate }) => {
  const { scene } = useGLTF("./desktop_pc/scene1.gltf");
  const [rotation, setRotation] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const fixedScene = useMemo(() => {
  const cloned = scene.clone(true);

  // Compute full bounding box
  const box = new THREE.Box3().setFromObject(cloned);
  const center = new THREE.Vector3();
  box.getCenter(center);
  cloned.position.set(-center.x, -box.min.y, -center.z);

  // Traverse meshes and change front-facing edge to light grey
  cloned.traverse((child) => {
    if (child.isMesh) {
      child.material = child.material.clone(); // avoid mutating original

      // If it's the "black slab" mesh, make it grey
      if (child.material.color.getHexString() === "000000") {
        child.material.color.set("#3b3b3b"); 
      }
    }
  });

  return cloned;
}, [scene]);


  // Subtle auto-rotation animation
  useEffect(() => {
    if (shouldAutoRotate && !hasAnimated) {
      setHasAnimated(true);
      const targetRotation = Math.PI / 4;
      const duration = 15000;
      const startTime = Date.now();
      const startRotation = rotation;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
        setRotation(
          startRotation + (targetRotation - startRotation) * easeInOut(progress)
        );
        if (progress < 1) requestAnimationFrame(animate);
      };

      animate();
    }
  }, [shouldAutoRotate, hasAnimated, rotation]);

  return (
    <group>
      {/* Lighting */}
      <hemisphereLight intensity={0.3} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} position={[0, 10, 5]} />
      <directionalLight intensity={0.4} position={[10, 10, 5]} />
      <pointLight intensity={0.8} position={[0, -1, 3]} />
      <spotLight
        position={[0, 2, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.6}
      />

      {/* Model */}
      <group
        position={
          isMobile
            ? [-0.9, -2.0, -2.0] 
            : [0, -3, -1.5]   
        }
      >
        <group rotation={[0, rotation, 0]}>
          <primitive
            object={fixedScene}
            scale={isMobile ? [2.5, 2.5, 2.5] : [3.0, 3.0, 3.0]}
          />
        </group>
      </group>
    </group>
  );
};

const ComputersCanvas = ({ shouldAutoRotate }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 8, 22], fov: 35, near: 0.1, far: 2000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom
          enableRotate
          autoRotate={false}
          minDistance={8}
          maxDistance={60}
        />
        <Computers isMobile={isMobile} shouldAutoRotate={shouldAutoRotate} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
