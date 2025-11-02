import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-animated-bg">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Smart Solutions</span>
        </h1>
        <p className="hero-subtitle">Driving Innovation. Delivering Excellence.</p>
        <div className="floating-shapes">
          <span className="shape shape1" />
          <span className="shape shape2" />
          <span className="shape shape3" />
          <span className="shape shape4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
