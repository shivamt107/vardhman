import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Partners.css';
import logo from '../assets/honda.png';
import smartSolution from '../assets/kia.png';
import car from '../assets/hyundai.png';
import toyota from '../assets/toyota.png';
import mg from '../assets/MG.png';
import volvo from '../assets/volvo.png';

const Partners = () => {
  const partners = [
    { title: 'Honda', image: logo },
    { title: 'Kia',  image: smartSolution },
    { title: 'Hyundai',  image: car },
    { title: 'Toyota', image: toyota },
    { title: 'MG',  image: mg },
    { title: 'Volvo',  image: volvo }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === partners.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isMobile, partners.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === partners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="partners-section">
      <div className="partners-wrapper">
        <h2 className="partners-title">Partners</h2>
        {isMobile ? (
          <div className="partners-slideshow">
            <button className="slide-button prev" onClick={prevSlide}>&lt;</button>
            <div className="slide-container">
              <Card 
                title={partners[currentIndex].title} 
                image={partners[currentIndex].image} 
              />
            </div>
            <button className="slide-button next" onClick={nextSlide}>&gt;</button>
            <div className="slide-dots">
              {partners.map((_, index) => (
                <button
                  key={index}
                  className={`slide-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="partners-container">
            {partners.map((p, i) => (
              <Card key={i} title={p.title} image={p.image} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
