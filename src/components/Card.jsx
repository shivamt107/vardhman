import React from 'react';
import './Card.css';

const Card = ({ title, description, icon, image }) => {
  return (
    <div className="card">
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