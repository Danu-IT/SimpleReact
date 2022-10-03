import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";

import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter className='containerPages'>
      <MyNavbar></MyNavbar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
