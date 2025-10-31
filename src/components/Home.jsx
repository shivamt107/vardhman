import React, { useEffect } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import Card from './Card';
import './Home.css';
import Footer from './Footer';
import Partners from './Partners';
import Stats from './Stats';

// receive navigation handler from App
const Home = ({ onContactClick }) => {
  useEffect(() => {
    // Scroll to section based on hash on load
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Handle scroll events to update URL hash
    const handleScroll = () => {
      const sections = ['hero', 'cards', 'stats', 'partners'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            const hash = `#${section}`;
            if (window.location.hash !== hash) {
              window.history.replaceState(null, null, hash);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
      <section id="hero" className="hero-section">
        <Slideshow />
      </section>
      <section id="cards" className="cards-section">
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
      <section id="stats" className="stats-section">
        <Stats />
      </section>
      <section id="partners" className="partners-section">
        <Partners />
      </section>
      <Footer onContactClick={onContactClick} />
    </div>
  );
};

export default Home;