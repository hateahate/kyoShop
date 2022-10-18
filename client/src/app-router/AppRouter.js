import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes, adminRoutes } from "./routes";
import { Context } from "../index";
import NotFound from "../pages/NotFound";

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
    </Routes>
  );
};

export default AppRouter;
