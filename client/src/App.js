import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <h1>it works</h1>
    </BrowserRouter>
  )
}

export default App
