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
        <h2 className="about-title">About Smart Solutions</h2>
        <div className="about-content">
          <div className="about-paragraph">
            <h3>Our Journey</h3>
            <p>
            Since our establishment in 2010, SMART SOLUTION has an extensive experience that was acquired through many years of engagement in the industry. We are among the contributors who shape tomorrow's technology standards in Gujarat and Delhi. From our head oﬃce in
DELHI-NCR, a dedicated team of experienced professionals provide our services to an extensive portfolio of corporate, public sector Private Clients throughout the North and West India. We have a recognized ability to deliver services and solutions, tailored to ﬁt the unique needs of each organization according to its size and area of activity.


            </p>
          </div>

          <div className="about-paragraph">
            <h3>Our Expertise</h3>
            <p>
           We inve stin new solutions and acquisitions, build our capabilities, and develop our teams to ensure that SMART SOLUTION is well positioned to help clients explore the opportunity – and deliver on the potential – of this new digital business era.

            </p>
          </div>

          <div className="about-paragraph">
            <h3>Our Commitment</h3>
            <p>
              At Smart Solutions, we believe in building lasting relationships with our clients 
              through transparency, reliability, and excellence. Every vehicle that enters our 
              facility receives personalized attention, and every client benefits from our 
              commitment to exceptional service and customer satisfaction.
            </p>
          </div>

          <div className="about-paragraph">
            <h3>Looking Forward</h3>
            <p>
              As we continue to grow and evolve, our focus remains on innovation and improvement. 
              We're constantly updating our skills, technology, and services to meet the changing 
              needs of modern vehicles and our discerning customers. Join us on our journey 
              towards automotive excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;