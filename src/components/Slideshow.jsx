import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import smartSolution from '../assets/car.png';
import smart from '../assets/train.png';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: smartSolution,
      title: 'Welcome to Smart Solution',
      description: 'Innovative solutions for your business needs'
    },
    {
      image: smart,
      title: 'Customer Success',
      description: 'Your success is our priority'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
        {/* indicators left commented out intentionally */}
      </div>

 
    </>
  );
};

export default Slideshow;