import React, { useState, useEffect, useRef } from 'react';

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
    <section ref={sectionRef} className="py-16 px-8 bg-gradient-to-b from-white to-gray-50 snap-start overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl text-gray-800 mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-gray-600 after:to-transparent">
          Our Growth Story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div 
                className="text-6xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4"
              >
                {counts[index] || '0'}
              </div>
              <h3 className="text-xl text-gray-700 mb-2 font-semibold relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3/4 before:bg-gray-600 before:rounded">
                {achievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base text-justify px-4">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;