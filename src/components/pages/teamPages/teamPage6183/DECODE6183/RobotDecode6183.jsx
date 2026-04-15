import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, Html, useProgress } from '@react-three/drei';
import './DecodePage6183.css';

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="robot-loader">
                <div className="robot-loader-spinner" />
                <p>{Math.round(progress)}%</p>
            </div>
        </Html>
    );
}

function RobotModel() {
    const { scene } = useGLTF('/assets/FTC6183/Robot V2 compressed.glb');
    return <primitive object={scene} />;
}

const RobotDecode6183 = () => {
    return (
        <section className="robot-container-6183">
            <h2 className="section-title-6183">Robot</h2>
            <div className="robot-canvas-wrapper">
                <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
                    <Suspense fallback={<Loader />}>
                        <Stage environment="city" intensity={0.5}>
                            <RobotModel />
                        </Stage>
                        <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={false} enablePan={false} />                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

useGLTF.preload('/assets/FTC6183/Robot V2 compressed.glb');
export default RobotDecode6183;