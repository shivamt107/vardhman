import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductRange from './components/ProductRange';
import Customers from './components/Customers';

const MainRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product-range" element={<ProductRange />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  </Router>
);

export default MainRoutes;
