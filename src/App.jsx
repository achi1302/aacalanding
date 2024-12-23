import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'


export const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
