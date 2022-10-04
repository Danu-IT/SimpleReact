import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";

import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  })
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter className="containerPages">
        <MyNavbar></MyNavbar>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
