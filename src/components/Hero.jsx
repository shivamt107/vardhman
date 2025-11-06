import React from 'react';
import './Hero.css';
import logo from '../assets/logo.jpg';
import iso from '../assets/resources/header_images/iso.png';
import mii from '../assets/resources/header_images/mii.png';

const Hero = () => {
  return (
    <section className="hero-animated-bg">
      <div className="hero-content">
                <div className="hero-title">
  <img src={logo} alt="Vardaan Industries Logo" className="hero-logo" />
  </div>
        <div className="hero-title">
             <img src={iso} alt="Vardaan Industries Logo" className="hero-logo" />
              <img src={mii} alt="Vardaan Industries Logo" className="hero-logo" />
          {/* <span className="gradient-text">Vardaan Industries</span> */}
        </div>
        <p className="hero-subtitle">Driving Innovation. Delivering Excellence.</p>
        <div className="swipe-down-indicator">
          <span className="swipe-arrow">▼</span>
          <span className="swipe-text">Scroll Down</span>
        </div>
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
