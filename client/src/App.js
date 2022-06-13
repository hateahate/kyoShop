import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import Header from './components/VitaforestUI/Interface/Header/Header'
import Footer from './components/VitaforestUI/Interface/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
