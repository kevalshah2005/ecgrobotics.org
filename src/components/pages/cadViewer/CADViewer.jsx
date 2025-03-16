import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Stats } from "@react-three/drei";



function Model() {
  const gltf = useGLTF("/models/ToyCar.glb", true, "/models");
  console.log("GLTF Loaded:", gltf);
  return gltf.scene ? <primitive object={gltf.scene} scale={10} /> : null;
}

export default function CADViewer() {
  return (
    <div style={{ width: "90vw", height: "70vh", outline: "1px solid var(--orange)", margin: "0 auto"}}>
      <Canvas camera={{ position: [1, 1, 1]}}>
        <ambientLight intensity={50} />
        {/* <directionalLight position={[10, 10, 10]} intensity={1} /> */}
        <Stats />
        <Model />
        <OrbitControls /> {/* Enables zoom and rotation */}
        {/* <directionalLight position={[5, 5, 5]} intensity={1.5} /> */}

      </Canvas>
    </div>
  );
}
