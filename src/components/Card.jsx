import React, { useEffect, useRef } from 'react';

const Card = ({ title, description, icon, image, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add delay based on card index for staggered animation
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 200); // 200ms delay between each card
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
        rootMargin: '0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className="bg-[#00000040] rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 translate-y-[100px] [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-gray-100"
    >
      {image ? (
        <img loading="lazy" src={image} alt={title} className="w-[70%] h-[70%] object-contain mx-auto mb-4 block" />
      ) : (
        <div className="text-3xl mb-4 text-[#007bff]">{icon}</div>
      )}
      <h3 className="m-0 mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-6 m-0">{description}</p>
    </div>
  );
};

export default React.memo(Card);