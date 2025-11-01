import React, { useEffect, useRef } from 'react';
import './Card.css';

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
    <div ref={cardRef} className="card">
      {image ? (
        <img src={image} alt={title} className="card-image" />
      ) : (
        <div className="card-icon">{icon}</div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;