import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import styled from 'styled-components'
import Header from './components/VitaforestUI/Interface/Header/Header'
import Footer from './components/VitaforestUI/Interface/Footer/Footer'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Content = styled.div`
  flex: 1 0 auto;
`
const App = () => {
  console.log(window.location.pathname)
  if (window.location.pathname !== "/admin"){
  return (
    <Page>
      <BrowserRouter>
        <Header />
        <Content>
          <AppRouter />
        </Content>
        <Footer />
      </BrowserRouter>
    </Page>
  )
}else{
  return(
  <Page>
  <BrowserRouter>
    
    <Content>
      <AppRouter />
    </Content>
   
  </BrowserRouter>
</Page>)
}
}

export default App
