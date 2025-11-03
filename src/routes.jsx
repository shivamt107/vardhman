import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductRange from './components/ProductRange';
import Customers from './components/Customers';
import Header from './components/Header';

const MainRoutes = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-range" element={<ProductRange />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  </Router>
);

export default MainRoutes;
