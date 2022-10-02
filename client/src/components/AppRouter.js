import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { BasketContext, Context } from "../index";

const AppRouter = () => {
  const { basket } = useContext(Context);
  const { user } = useContext(Context);
  console.log(user)
  console.log(basket)
  return (
    <Routes>
      {user.isAuth && user.user.role == 'admin' && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} exact />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} exact />
      )}
    </Routes>
  )
}

export default AppRouter
