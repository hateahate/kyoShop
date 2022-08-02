import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../api/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {

  const { user } = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    let userData;
    if (isLogin) {
      userData = await login(email, password);
    }
    else {
      userData = await registration(email, password);
    }
    user.setUser(user);
    user.setIsAuth(true);
  }
  return (
    <div>Hello</div>
  )
})

export default Auth
