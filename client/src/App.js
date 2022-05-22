import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
