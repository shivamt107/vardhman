import React, { useState, useEffect, useRef } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [counts, setCounts] = useState({});
  const observer = useRef(null);
  const sectionRef = useRef(null);

  const achievements = [
    {
      number: '4+',
      title: 'Years of Excellence',
      description: 'Delivering outstanding service since 2010'
    },
    // {
    //   number: '1000+',
    //   title: 'Happy Clients',
    //   description: 'Trust us with their automotive needs'
    // },
    {
      number: '4+',
      title: 'Customers',
      description: 'Official partner with leading car manufacturers'
    },
    {
      number: '95%',
      title: 'Customer Satisfaction',
      description: 'Consistently high service ratings'
    }
  ];

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.current.observe(sectionRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const startCounting = () => {
    achievements.forEach((achievement, index) => {
      const targetNumber = parseInt(achievement.number);
      if (!isNaN(targetNumber)) {
        let startNumber = 0;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetNumber / steps;
        const stepDuration = duration / steps;
        
        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          startNumber = Math.min(Math.round(increment * currentStep), targetNumber);
          
          setCounts(prev => ({
            ...prev,
            [index]: startNumber + (achievement.number.includes('+') ? '+' : '%')
          }));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      }
    });
  };

  return (
    <section ref={sectionRef} className="achievements-section">
      <div className="achievements-wrapper">
        <h2 className="achievements-title">Our Growth Story</h2>
        <div className="achievements-container">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-number">
                {counts[index] || '0'}
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;