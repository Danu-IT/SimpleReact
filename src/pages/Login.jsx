import React from 'react'
import { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
  const {setIsAuth} = useContext(AuthContext)
  const login = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div>
      <h1>Страница для авторизации</h1>
      <form onSubmit={login} action="">
        <MyInput type="text" placeholder='Введите логин'/>
        <MyInput type="password" placeholder='Введите пароль'/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login