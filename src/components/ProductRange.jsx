import React, { useState, useEffect, useCallback, useRef } from 'react';
import Card from './Card';
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
  const tabsRef = useRef(null);
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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === currentItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [currentItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? currentItems.length - 1 : prevIndex - 1
    );
  }, [currentItems.length]);

  const scrollTabsLeft = useCallback(() => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }, []);

  const scrollTabsRight = useCallback(() => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-[#eeeded] snap-start flex flex-col  min-h-screen">
      <div className="max-w-6xl mx-auto text-center w-full flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl mb-4 md:mb-5 text-gray-800">Products</h2>
        
        {/* Tabs section */}
        <div className="relative mb-6 w-full">
          
          <div 
            className="flex gap-2 overflow-x-auto px-0 md:px-10 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-[50px] md:pt-0"
            ref={tabsRef}
          >
            <button
              className={`px-4 md:px-6 py-2 rounded-lg border-none cursor-pointer transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                selectedTab === 'Public Addresses' 
                  ? 'bg-[#20B2AA] text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-[#20B2AA] hover:text-white'
              }`}
              onClick={() => setSelectedTab('Public Addresses')}
            >
              Public Addresses
            </button>
            <button
              className={`px-4 md:px-6 py-2 rounded-lg border-none cursor-pointer transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                selectedTab === 'Passenger Info System' 
                  ? 'bg-[#20B2AA] text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-[#20B2AA] hover:text-white'
              }`}
              onClick={() => setSelectedTab('Passenger Info System')}
            >
              Passenger Info System
            </button>
            <button
              className={`px-4 md:px-6 py-2 rounded-lg border-none cursor-pointer transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                selectedTab === 'CCTV' 
                  ? 'bg-[#20B2AA] text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-[#20B2AA] hover:text-white'
              }`}
              onClick={() => setSelectedTab('CCTV')}
            >
              CCTV
            </button>
            <button
              className={`px-4 md:px-6 py-2 rounded-lg border-none cursor-pointer transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                selectedTab === 'Information On Board' 
                  ? 'bg-[#20B2AA] text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-[#20B2AA] hover:text-white'
              }`}
              onClick={() => setSelectedTab('Information On Board')}
            >
              Information On Board
            </button>
          </div>
          
        </div>
        
        {/* Content section */}
        {isMobile ? (
          <div className="relative w-full max-w-[350px] mx-auto px-8 flex-1 flex flex-col justify-center pt-[50px]">
            <button 
              className="absolute top-1/2 -translate-y-1/2 left-0 bg-transparent text-gray-800 border-none cursor-pointer text-2xl p-0 transition-all duration-300 opacity-70 hover:text-gray-500 z-10 active:opacity-100" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              &lt;
            </button>
            
            <div className="mx-auto w-full h-[280px] flex items-center justify-center">
              <div className="bg-[#00000040] rounded-lg p-4 shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-center w-full h-full flex flex-col justify-center">
                <img 
                  loading="lazy" 
                  src={currentItems[currentIndex].image} 
                  alt={currentItems[currentIndex].title} 
                  className="w-full h-[180px] object-contain mx-auto mb-3 block" 
                />
                <h3 className="m-0 text-gray-800 text-base">{currentItems[currentIndex].title}</h3>
              </div>
            </div>
            
            <button 
              className="absolute top-1/2 -translate-y-1/2 right-0 bg-transparent text-gray-800 border-none cursor-pointer text-2xl p-0 transition-all duration-300 opacity-70 hover:text-gray-500 z-10 active:opacity-100" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              &gt;
            </button>
            
            <div className="flex justify-center gap-2 mt-4">
              {currentItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gray-600 scale-125 shadow-[0_0_15px_rgba(102,102,102,0.5)]' 
                      : 'bg-[#ccc] hover:scale-150'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {currentItems.map((p, i) => (
              <Card key={i} title={p.title} image={p.image} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(ProductRange);
