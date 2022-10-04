import React from 'react'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context';


const MyNavbar = () => {
  const {setIsAuth} = useContext(AuthContext);

  const exit = e => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className="navbar">
      <button onClick={exit}>Выйти</button>
        <div className="navbar__linksv">
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div>
  )
}

export default MyNavbar