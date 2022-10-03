import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<PostsPage />}></Route>
      <Route path="/posts/:id" element={<PostPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
