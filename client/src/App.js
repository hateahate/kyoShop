import React, { useState, useEffect, useContext } from 'react'
import './App.css'
import 'react-notifications/lib/notifications.css';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { check } from './api/userAPI';
import { Spinner } from 'react-bootstrap';
import { Context } from '.';
import { fetchBasket } from './api/basketAPI';


const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Content = styled.div`
  flex: 1 0 auto;
`
const App = observer(() => {
  const { user } = useContext(Context)
  const { basket } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(data);
      user.setIsAuth(true);
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }
  return (
    <Page>
      {console.log(basket)}
      <BrowserRouter>
        <Content>
          <AppRouter />
        </Content>
      </BrowserRouter>
    </Page>
  )
})

export default App
