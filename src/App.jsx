import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'


export const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </Router>
  )
}

export default App
