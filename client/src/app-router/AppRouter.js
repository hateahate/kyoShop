import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes, adminRoutes } from "./routes";
import { Context } from "../index";
import NotFound from "../pages/NotFound";
import MyAccount from "../pages/MyAccount";
import Auth from "../pages/Auth";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        user.user.role == "admin" &&
        adminRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<NotFound />} />
      {user.isAuth ? <Route path="/account" element={<MyAccount />} /> : <Route path="/account" element={<Auth />} />}
    </Routes>
  );
};

export default AppRouter;
