import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import Starfield from './Starfield';

const MainContent: React.FC = () => {
    const globeRef = useRef<any>(null); // Use `any` for flexibility with methods

    useEffect(() => {
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            if (controls) {
                controls.autoRotate = true;
                controls.autoRotateSpeed = 1;
            }
        }
    }, []);

    return (
        <section className="relative flex items-center justify-center bg-black text-white min-h-screen overflow-hidden">
            {/* Starfield background */}
            <Starfield />

            {/* Globe Container */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Globe
                    ref={globeRef}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    backgroundColor="rgba(0,0,0,0)"
                    width={window.innerWidth * 0.8}  // Adjusted width for better fit
                    height={window.innerHeight * 0.8} // Adjusted height for better fit
                />
            </div>
        </section>
    );
};

export default MainContent;

