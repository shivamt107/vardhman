import React, { useEffect, useRef } from 'react';
import './About.css';

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
    <section className="about-section" ref={aboutRef}>
      <div className="about-wrapper">
  <h2 className="about-title">About Vardaan Industries</h2>
        <div className="about-content">
          <div className="about-paragraph">
            <h3>Our Journey</h3>
            <p>
         Vardaan Electronic Industries Pvt. Ltd., is an ISO 9001 company setup in 2021 for the manufacturing of IPIS, PA, PIS, infotainment system and CCTV systems for Rolling stock application.

At Vardaan Electronic Industries Pvt. Ltd., we are dedicated to revolutionizing railway infrastructure through cutting-edge electronic solutions. As a trusted partner in the industry, we specialize in providing advanced Public Address Systems (PA), Passenger Information Systems (PIS), Platform Information Displays (IPIS), CCTV Solutions, and a range of other innovative products tailored for railway operations.

Our main aim has been to introduce only high-tech components / equipment, which are either not available in the country or bring value addition to India.

With our constant R&D efforts and world-class manufacturing units, we have successfully introduced several new technologically advanced products under the "Make in India" initiative, contributing to a self-reliant (Atma Nirbhar) India and saving valuable foreign exchange.


            </p>
          </div>

          <div className="about-paragraph">
            <h3>Our Expertise</h3>
            <p>
            <b>Public Address Systems (PA):</b> Clear, real-time announcements for passengers and staff across stations and platforms.<br></br>
            <b>Passenger Information Systems (PIS):</b> Provide accurate and timely information, enhancing passenger convenience and operational transparency.<br></br>
            <b>Platform Information Displays (IPIS):</b> Display real-time train schedules, arrival and departure times, and essential announcements.<br></br>
            <b>CCTV Solutions:</b> Ensure safety and security with high-definition surveillance systems designed for stations, platforms, and onboard applications.<br></br>

            </p>
          </div>

          <div className="about-paragraph">
            <h3>Our Commitment</h3>
            <p>
            At Vardaan Electronic Industries Pvt. Ltd., quality is our cornerstone. Our products undergo rigorous testing and adhere to railway industry standards to ensure reliability and longevity. We continually invest in research and development to offer cutting-edge solutions that meet the evolving needs of railway infrastructure.
            </p>
          </div>

          <div className="about-paragraph">
            <h3>Looking Forward</h3>
            <p>
           We believe in building lasting partnerships with our clients. From initial consultation to installation and after-sales support, our dedicated team ensures seamless implementation and operational efficiency. Our customer-centric approach drives us to provide personalized solutions that align with your operational goals.
            </p>
          </div>

              <div className="about-paragraph">
            <h3>Our Mission</h3>
            <p>
          Our mission is to deliver reliable, high-quality electronic solutions that enhance communication, safety, and passenger experiences across railway networks. We are committed to contributing to the modernization of railways through technological excellence and exceptional service.<br></br>
          We envision becoming the leading provider of integrated electronic systems for railways, recognized for our innovation, reliability, and commitment to customer satisfaction. Our goal is to empower rail operators with state-of-the-art solutions that ensure efficient operations and seamless passenger experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;