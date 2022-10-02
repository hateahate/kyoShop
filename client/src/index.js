import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from './store/UserStore'
import BasketStore from './store/BasketStore'
import { Normalize } from 'styled-normalize'
import 'bootstrap/dist/css/bootstrap.min.css';

// Contexts
export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      basket: new BasketStore()
    }}
  >
    <Normalize />
    <App />
  </Context.Provider>,
  document.getElementById('root'),
)
