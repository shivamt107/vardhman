import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import ContactForm from './components/ContactForm'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="app">
      {page === 'home' && <Home onContactClick={() => setPage('contact')} />}
      {page === 'contact' && (
        <ContactForm onBack={() => setPage('home')} />
      )}
    </div>
  )
}

export default App
