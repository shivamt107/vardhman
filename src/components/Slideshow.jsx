import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import slide1 from '../assets/resources/home_slide/1.jpg';
import slide2 from '../assets/resources/home_slide/2.jpg';
import slide3 from '../assets/resources/home_slide/3.jpg';
import slide4 from '../assets/resources/home_slide/4.jpg';
import slide5 from '../assets/resources/home_slide/5.jpg';
import slide6 from '../assets/resources/home_slide/6.jpg';
import slide7 from '../assets/resources/home_slide/7.jpg';


const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: slide1,
  title: 'Welcome to Vardaan Industries',
      description: 'Innovative solutions for your business needs'
    },
    // {
    //   image: slide2,
    //   title: 'Customer Success',
    //   description: 'Your success is our priority'
    // },
    {
      image: slide3,
      title: 'Customer Success',
      description: 'Your success is our priority'
    },
    {
      image: slide4,
      title: 'Customer Success',
      description: 'Your success is our priority'
    },
    {
      image: slide5,
      title: 'Customer Success',
      description: 'Your success is our priority'
    },
    {
      image: slide6,
      title: 'Customer Success',
      description: 'Your success is our priority'
    },
    // {
    //   image: slide7,
    //   title: 'Customer Success',
    //   description: 'Your success is our priority'
    // }
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