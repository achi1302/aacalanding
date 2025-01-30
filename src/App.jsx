import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'


export const App = () => {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/servicios' element={<Servicios />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
