import React from 'react';
import './Hero.css';
import LightRays from './LightRays';

const Hero = () => {
    return (
        <section className='hero'>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
                />
            </div>
            <div className='name'>
                <h1>Rayan <br />SAMA</h1>
            </div>
        </section>
    );
}

export default Hero;
