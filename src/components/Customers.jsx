import React from 'react';
import Card from './Card';
import './Customers.css';
import IR from '../assets/resources/Customers/Indian_railways.png';
import ICF from '../assets/resources/Customers/Integral_cach _factory.png';
import MCF from '../assets/resources/Customers/Modern_Coach _factory.jpg';
import RCF from '../assets/resources/Customers/Rail_coach_factory.jpg';

const customers = [
  { title: 'Indian Railways', image: IR },
  { title: 'Integral Coach Factory', image: ICF },
  { title: 'Modern Coach Factory', image: MCF },
  { title: 'Rail Coach Factory', image: RCF },
];

const Customers = () => (
  <section className="customer-section">
    <div className="customer-wrapper">
      <h2 className="customer-title">Our Customers</h2>
      <div className="customer-container">
        {customers.map((c, i) => (
          <Card key={i} title={c.title} image={c.image} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Customers;
