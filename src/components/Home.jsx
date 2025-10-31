import React from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import Card from './Card';
import './Home.css';
import Footer from './Footer';
import Partners from './Partners';

// receive navigation handler from App
const Home = ({ onContactClick }) => {
  const cards = [
    {
      title: 'Innovation',
      description: 'Leading the way with cutting-edge solutions and technologies.',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'Delivering outstanding quality in every project we undertake.',
      icon: '⭐'
    },
    {
      title: 'Support',
      description: '24/7 dedicated support to ensure your success.',
      icon: '🤝'
    }
  ];

  return (
    <div className="home">
      <Header />
      <section className="hero-section">
        <Slideshow />
      </section>
      <section className="cards-section">
        <div className="cards-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </section>
      {/* Partners panel */}
      <Partners />
  <Footer onContactClick={onContactClick} />
    </div>
  );
};

export default Home;