import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import ContactForm from './components/ContactForm'
import ProductRange from './components/ProductRange'
import Customers from './components/Customers'
import Header from './components/Header'


function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="app">
      <Header onTab={setPage} />
      {page === 'home' && <Home onContactClick={() => setPage('contact')} />}
      {page === 'contact' && <ContactForm onBack={() => setPage('home')} />}
      {page === 'product-range' && <ProductRange />}
      {page === 'customers' && <Customers />}
    </div>
  )
}

export default App
