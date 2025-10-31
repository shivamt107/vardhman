import React from 'react';
import Card from './Card';
import './Partners.css';
import logo from '../assets/honda.png';
import smartSolution from '../assets/kia.png';
import car from '../assets/hyundai.png';

const Partners = () => {
  const partners = [
    { title: 'Honda', image: logo },
    { title: 'Kia',  image: smartSolution },
    { title: 'Hyundai',  image: car }
  ];

  return (
    <section className="partners-section">
      <div className="partners-wrapper">
        <h2 className="partners-title">Partners</h2>
        <div className="partners-container">
          {partners.map((p, i) => (
            <Card key={i} title={p.title} description={p.description} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
