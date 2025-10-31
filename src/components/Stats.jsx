import React, { useState, useEffect } from 'react';
import './Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({
    centers: 0,
    customers: 0,
    panels: 0
  });

  const targets = {
    centers: 105,
    customers: 230,
    panels: 3000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation
    const steps = 50; // Number of steps in the animation
    const interval = duration / steps;

    const counters = {
      centers: { current: 0, increment: targets.centers / steps },
      customers: { current: 0, increment: targets.customers / steps },
      panels: { current: 0, increment: targets.panels / steps }
    };

    const timer = setInterval(() => {
      let completed = true;

      const newCounts = {
        centers: Math.min(Math.round(counters.centers.current += counters.centers.increment), targets.centers),
        customers: Math.min(Math.round(counters.customers.current += counters.customers.increment), targets.customers),
        panels: Math.min(Math.round(counters.panels.current += counters.panels.increment), targets.panels)
      };

      if (newCounts.centers < targets.centers || 
          newCounts.customers < targets.customers || 
          newCounts.panels < targets.panels) {
        completed = false;
      }

      setCounts(newCounts);

      if (completed) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-wrapper">
        <h2 className="stats-title">Your Trust. Our Confidence.</h2>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{counts.centers}</div>
            <div className="stat-label">Centers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.customers}</div>
            <div className="stat-label">Business Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.panels}</div>
            <div className="stat-label">Digital Panel Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;