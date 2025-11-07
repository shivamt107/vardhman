import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';
import ProductRange from './ProductRange';
import Slideshow from './Slideshow';
import Achievements from './Achievements';
import ProductsOverview from './ProductsOverview';
import About from './About';

// receive navigation handler from App
const Home = ({ onContactClick }) => {
  useEffect(() => {
    // Scroll to section based on hash on load
    const hash = window.location.hash;
    if (hash) {
      // Only handle simple element-id hashes (e.g., #hero). Ignore router hashes like #/product-range
      const isElementIdHash = /^#[A-Za-z][\w-]*$/.test(hash);
      if (!isElementIdHash) return;
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Handle scroll events to update URL hash
    // const handleScroll = () => {
    //   const sections = ['hero', 'cards', 'achievements', 'about', 'partners'];
    //   const scrollPosition = window.scrollY + window.innerHeight / 2;

    //   for (const section of sections) {
    //     const element = document.getElementById(section);
    //     if (element) {
    //       const { top, bottom } = element.getBoundingClientRect();
    //       if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
    //         const hash = `#${section}`;
    //         if (window.location.hash !== hash) {
    //           window.history.replaceState(null, null, hash);
    //         }
    //         break;
    //       }
    //     }
    //   }
    // };

    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen">
      <section id="hero" className="w-full h-screen snap-start">
        <Hero />
      </section>
      <section id="product">
        <ProductsOverview />
      </section>
      <section id="cards" className="py-16 px-8 bg-white snap-start flex flex-col justify-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              index={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </section>
      <section id="achievements" className="py-24 px-0 bg-gradient-to-br from-gray-50 to-gray-100 snap-start">
        <Slideshow />
      </section>
      {/* <section id="stats" className="stats-section">
        <Stats />
      </section> */}
      <section id="achievements" className="achievements-section">
        <Achievements />
      </section>
      {/* <section id="partners" className="partners-section">
        <ProductRange />
      </section> */}
      <section id="about" className="about-section">
        <About />
      </section>
      <Footer onContactClick={onContactClick} />
    </div>
  );
};

export default React.memo(Home);