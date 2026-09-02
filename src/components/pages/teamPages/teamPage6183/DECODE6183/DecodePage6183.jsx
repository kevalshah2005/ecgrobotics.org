import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress } from '@react-three/drei';
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
    return <primitive object={scene} scale={2.2} position={[0, -0.5, 0]} />;
}

const RobotDecode6183 = () => {
    const [inView, setInView] = useState(false);
    const wrapRef = useRef(null);

    // Only mount the canvas once it's actually scrolled into view
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.15 }
        );
        if (wrapRef.current) obs.observe(wrapRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="robot-container-6183">
            <h2 className="section-title-6183">Robot</h2>
            <div className="robot-canvas-wrapper" ref={wrapRef}>
                {inView && (
                    <Canvas
                        camera={{ position: [0, 1.5, 3], fov: 50 }}
                        dpr={[1, 1.5]}              // cap pixel ratio, big lag source on retina/mobile
                        frameloop="demand"           // only re-render when something changes
                        gl={{ antialias: false, powerPreference: 'low-power' }}
                    >
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Suspense fallback={<Loader />}>
                            <RobotModel />
                            <OrbitControls
                                autoRotate
                                autoRotateSpeed={1}
                                enableZoom={false}
                                enablePan={false}
                                makeDefault
                            />
                        </Suspense>
                    </Canvas>
                )}
            </div>
        </section>
    );
};

useGLTF.preload('/assets/FTC6183/Robot V2 compressed.glb');
export default RobotDecode6183;