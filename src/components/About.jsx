import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    const paragraphs = aboutRef.current.querySelectorAll('.about-paragraph');
    paragraphs.forEach(paragraph => observer.observe(paragraph));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-white to-gray-50 snap-start overflow-hidden" ref={aboutRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl text-gray-800 mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-gray-600 after:to-transparent">
          About Vardaan Industries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
          <div className="about-paragraph opacity-0 translate-y-8 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0.1s] [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:-translate-y-1 hover:transition-transform hover:duration-300">
            <h3 className="text-2xl text-gray-700 mb-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3/4 before:bg-gray-600 before:rounded">Our Journey</h3>
            <p className="text-gray-600 leading-[1.8] text-lg text-justify px-4">
         Vardaan Electronic Industries Pvt. Ltd., is an ISO 9001 company setup in 2021 for the manufacturing of IPIS, PA, PIS, infotainment system and CCTV systems for Rolling stock application.

At Vardaan Electronic Industries Pvt. Ltd., we are dedicated to revolutionizing railway infrastructure through cutting-edge electronic solutions. As a trusted partner in the industry, we specialize in providing advanced Public Address Systems (PA), Passenger Information Systems (PIS), Platform Information Displays (IPIS), CCTV Solutions, and a range of other innovative products tailored for railway operations.

Our main aim has been to introduce only high-tech components / equipment, which are either not available in the country or bring value addition to India.

With our constant R&D efforts and world-class manufacturing units, we have successfully introduced several new technologically advanced products under the "Make in India" initiative, contributing to a self-reliant (Atma Nirbhar) India and saving valuable foreign exchange.
            </p>
          </div>

          <div className="about-paragraph opacity-0 translate-y-8 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0.3s] [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:-translate-y-1 hover:transition-transform hover:duration-300">
            <h3 className="text-2xl text-gray-700 mb-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3/4 before:bg-gray-600 before:rounded">Our Expertise</h3>
            <p className="text-gray-600 leading-[1.8] text-lg text-justify px-4">
            <b>Public Address Systems (PA):</b> Clear, real-time announcements for passengers and staff across stations and platforms.<br />
            <b>Passenger Information Systems (PIS):</b> Provide accurate and timely information, enhancing passenger convenience and operational transparency.<br />
            <b>Platform Information Displays (IPIS):</b> Display real-time train schedules, arrival and departure times, and essential announcements.<br />
            <b>CCTV Solutions:</b> Ensure safety and security with high-definition surveillance systems designed for stations, platforms, and onboard applications.<br />
            </p>
          </div>

          <div className="about-paragraph opacity-0 translate-y-8 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0.5s] [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:-translate-y-1 hover:transition-transform hover:duration-300">
            <h3 className="text-2xl text-gray-700 mb-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3/4 before:bg-gray-600 before:rounded">Our Commitment</h3>
            <p className="text-gray-600 leading-[1.8] text-lg text-justify px-4">
            At Vardaan Electronic Industries Pvt. Ltd., quality is our cornerstone. Our products undergo rigorous testing and adhere to railway industry standards to ensure reliability and longevity. We continually invest in research and development to offer cutting-edge solutions that meet the evolving needs of railway infrastructure.
            </p>
          </div>

          <div className="about-paragraph opacity-0 translate-y-8 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0.7s] [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:-translate-y-1 hover:transition-transform hover:duration-300">
            <h3 className="text-2xl text-gray-700 mb-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3/4 before:bg-gray-600 before:rounded">Looking Forward</h3>
            <p className="text-gray-600 leading-[1.8] text-lg text-justify px-4">
           We believe in building lasting partnerships with our clients. From initial consultation to installation and after-sales support, our dedicated team ensures seamless implementation and operational efficiency. Our customer-centric approach drives us to provide personalized solutions that align with your operational goals.
            </p>
          </div>

          <div className="about-paragraph opacity-0 translate-y-8 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0.9s] [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:-translate-y-1 hover:transition-transform hover:duration-300">
            <h3 className="text-2xl text-gray-700 mb-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3/4 before:bg-gray-600 before:rounded">Our Mission</h3>
            <p className="text-gray-600 leading-[1.8] text-lg text-justify px-4">
          Our mission is to deliver reliable, high-quality electronic solutions that enhance communication, safety, and passenger experiences across railway networks. We are committed to contributing to the modernization of railways through technological excellence and exceptional service.<br />
          We envision becoming the leading provider of integrated electronic systems for railways, recognized for our innovation, reliability, and commitment to customer satisfaction. Our goal is to empower rail operators with state-of-the-art solutions that ensure efficient operations and seamless passenger experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;