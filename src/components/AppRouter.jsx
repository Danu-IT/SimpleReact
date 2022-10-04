import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Login from "../pages/Login";
import PostsPage from "../pages/PostsPage";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          ></Route>
        );
      })}
      <Route path="/*" element={<PostsPage to="/posts" replace />}></Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          ></Route>
        );
      })}
      <Route path="/*" element={<Login to="/login" replace />}></Route>
    </Routes>
  );
};

export default AppRouter;
