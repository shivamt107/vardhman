import React, { useState, useEffect } from 'react';
import Card from './Card';
import './ProductRange.css';
import Driver_Desk from '../assets/resources/pa/Driver_Desk.png';
import Emergency_Push_Button from '../assets/resources/pa/Emergency_Push_Button.png';
import Emergency_talk_back_unit from '../assets/resources/pa/Emergency_talk_back_unit.png';
import Main_Processing_unit from '../assets/resources/pa/Main_Processing_unit.png';
import Mic from '../assets/resources/pa/Mic.png';
import Speaker from '../assets/resources/pa/Speaker.png';
import CCTV1 from '../assets/resources/CCTV/CCTV.png';
import CCTV2 from '../assets/resources/CCTV/CCTV2.png';
import CCTV3 from '../assets/resources/CCTV/CCTV3.png';
import CCTV4 from '../assets/resources/CCTV/CCTV4.png';
import PIS1 from '../assets/resources/pis/PIS1.png';
import PIS2 from '../assets/resources/pis/PIS2.png';
import PIS3 from '../assets/resources/pis/PIS3.png';
import PIS4 from '../assets/resources/pis/PIS4.png';
import PIS5 from '../assets/resources/pis/PIS5.png';
import PIS6 from '../assets/resources/pis/PIS6.png';
import PIS7 from '../assets/resources/pis/PIS7.png';
import PIS8 from '../assets/resources/pis/PIS8.png';
import IOB1 from '../assets/resources/IOB/IOB1.png';
import IOB2 from '../assets/resources/IOB/IOB2.png';

const ProductRange = () => {
  const publicAddressItems = [
    { title: 'Driver Desk Emergency Response Unit', image: Driver_Desk },
    { title: 'Emergency Push Button', image: Emergency_Push_Button },
    { title: 'Emergency Talk Back Unit', image: Emergency_talk_back_unit },
    { title: 'Main Processing Unit', image: Main_Processing_unit },
    { title: 'MIC', image: Mic },
    { title: 'Speaker', image: Speaker }
  ];

  const passengerInfoItems = [
    { title: 'PIS 1', image: PIS1 },
    { title: 'PIS 2', image: PIS2 },
    { title: 'PIS 3', image: PIS3 },
    { title: 'PIS 4', image: PIS4 },
    { title: 'PIS 5', image: PIS5 },
    { title: 'PIS 6', image: PIS6 },
    { title: 'PIS 7', image: PIS7 },
    { title: 'PIS 8', image: PIS8 }
  ];

  const cctvItems = [
    { title: 'CCTV 1', image: CCTV1 },
    { title: 'CCTV 2', image: CCTV2 },
    { title: 'CCTV 3', image: CCTV3 },
    { title: 'CCTV 4', image: CCTV4 }
  ];

  const informationOnBoardItems = [
    { title: 'Information On Board 1', image: IOB1 },
    { title: 'Information On Board 2', image: IOB2 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedTab, setSelectedTab] = useState('Public Addresses');

  const currentItems = selectedTab === 'Public Addresses'
    ? publicAddressItems
    : selectedTab === 'Passenger Info System'
    ? passengerInfoItems
    : selectedTab === 'CCTV'
    ? cctvItems
    : informationOnBoardItems;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Reset slideshow index when switching tabs
    setCurrentIndex(0);
  }, [selectedTab]);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === currentItems.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isMobile, currentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === currentItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? currentItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="partners-section">
      <div className="partners-wrapper">
        <h2 className="partners-title">Products</h2>
        <div className="partners-tabs">
          <button
            className={`partners-tab ${selectedTab === 'Public Addresses' ? 'active' : ''}`}
            onClick={() => setSelectedTab('Public Addresses')}
          >
            Public Addresses
          </button>
          <button
            className={`partners-tab ${selectedTab === 'Passenger Info System' ? 'active' : ''}`}
            onClick={() => setSelectedTab('Passenger Info System')}
          >
            Passenger Info System
          </button>
          <button
            className={`partners-tab ${selectedTab === 'CCTV' ? 'active' : ''}`}
            onClick={() => setSelectedTab('CCTV')}
          >
            CCTV
          </button>
          <button
            className={`partners-tab ${selectedTab === 'Information On Board' ? 'active' : ''}`}
            onClick={() => setSelectedTab('Information On Board')}
          >
            Information On Board
          </button>
        </div>
        {isMobile ? (
          <div className="partners-slideshow">
            <button className="slide-button prev" onClick={prevSlide}>&lt;</button>
            <div className="slide-container">
              <Card 
                title={currentItems[currentIndex].title} 
                image={currentItems[currentIndex].image} 
              />
            </div>
            <button className="slide-button next" onClick={nextSlide}>&gt;</button>
            <div className="slide-dots">
              {currentItems.map((_, index) => (
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
            {currentItems.map((p, i) => (
              <Card key={i} title={p.title} image={p.image} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};


export default ProductRange;
