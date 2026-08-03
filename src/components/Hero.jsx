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
                raysSpeed={1.5}
                lightSpread={1}
                rayLength={10}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                pulsating={false}
                fadeDistance={1}
                saturation={2}
                />
                <div className='name'>
                    <h1><span className='left-bra'>{'<'}</span>Rayan<br />&nbsp;&nbsp;SAMA<span className='right-bra'>{'/>'}</span></h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;
