import React from 'react';
import Card from './Card';
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
  <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50 snap-start">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl mb-12 text-gray-800">Our Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {customers.map((c, i) => (
          <Card key={i} title={c.title} image={c.image} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(Customers);
