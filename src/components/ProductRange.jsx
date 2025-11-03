import React, { useState, useEffect } from 'react';
import Card from './Card';
import './ProductRange.css';
import Driver_Desk from '../assets/resources/pa/Driver_Desk.png';
import Emergency_Push_Button from '../assets/resources/pa/Emergency_Push_Button.png';
import Emergency_talk_back_unit from '../assets/resources/pa/Emergency_talk_back_unit.png';
import Main_Processing_unit from '../assets/resources/pa/Main_Processing_unit.png';
import Mic from '../assets/resources/pa/Mic.png';
import Speaker from '../assets/resources/pa/Speaker.png';

const ProductRange = () => {
const partners = [
    { title: 'Driver Desk Emergency Response Unit', image: Driver_Desk },
    { title: 'Emergency Push Button',  image: Emergency_Push_Button },
    { title: 'Emergency Talk Back Unit',  image: Emergency_talk_back_unit },
    { title: 'Main Processing Unit', image: Main_Processing_unit },
    { title: 'MIC',  image: Mic },
    { title: 'Speaker',  image: Speaker }
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
        <h2 className="partners-title">Products</h2>
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


export default ProductRange;
