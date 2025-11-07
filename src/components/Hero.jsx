import React from 'react';
import logo from '../assets/logo.jpg';
import iso from '../assets/resources/header_images/iso.png';
import mii from '../assets/resources/header_images/mii.png';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#product');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden px-4 pt-20">
      {/* Floating shapes background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute rounded-full opacity-20 blur-3xl animate-floatShape w-[300px] h-[300px] bg-purple-400 top-[10%] left-[5%]" style={{animationDelay: '0s'}} />
        <span className="absolute rounded-full opacity-20 blur-3xl animate-floatShape w-[250px] h-[250px] bg-pink-400 top-[60%] left-[10%]" style={{animationDelay: '2s'}} />
        <span className="absolute rounded-full opacity-20 blur-3xl animate-floatShape w-[280px] h-[280px] bg-blue-400 top-[30%] right-[5%]" style={{animationDelay: '1s'}} />
        <span className="absolute rounded-full opacity-20 blur-3xl animate-floatShape w-[200px] h-[200px] bg-purple-400 bottom-[10%] right-[15%]" style={{animationDelay: '3s'}} />
      </div>

      {/* Main content */}
      <div className="z-10 text-center max-w-4xl mx-auto">
        {/* Announcement badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 mb-8 animate-[fadeInUp_0.8s_0.2s_forwards]">
          <span className="text-sm text-gray-700">ISO Certified & MII Approved</span>
          <button 
            onClick={scrollToNext}
            className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-1"
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Logo badges */}
           {/* <div className="flex items-center justify-center gap-4 mb-6 animate-[fadeInUp_0.8s_0.3s_forwards]">
          <img 
            src={logo} 
            alt="Vardaan Industries Logo" 
            className="w-[100px] h-[50px] md:w-[140px] md:h-[70px] object-contain drop-shadow-lg" 
          />
        </div> */}
        <div className="flex items-center justify-center gap-4 mb-5 animate-[fadeInUp_0.8s_0.3s_forwards]">
          <img 
            src={iso} 
            alt="ISO Certification" 
            className="w-[90px] h-[45px] md:w-[120px] md:h-[60px] object-contain drop-shadow-lg" 
          />
          <img 
            src={mii} 
            alt="MII Certification" 
            className="w-[90px] h-[45px] md:w-[120px] md:h-[60px] object-contain drop-shadow-lg" 
          />
        </div>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 leading-tight animate-[fadeInUp_0.8s_0.4s_forwards]">
          Data to enrich your<br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            railway solutions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_0.5s_forwards]">
          Driving Innovation. Delivering Excellence. Transforming railway communication systems with cutting-edge PA, PIS, and CCTV solutions for a safer, smarter transit experience.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-[fadeInUp_0.8s_0.6s_forwards]">
          {/* <button 
            onClick={scrollToNext}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get started
          </button> */}
          <button 
            onClick={scrollToNext}
            className="px-8 py-3 bg-transparent text-gray-800 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
          >
            Learn more
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeInUp_1s_1s_forwards]">
          <span className="text-sm text-gray-500 font-medium tracking-wide">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-400 animate-bounceDown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
