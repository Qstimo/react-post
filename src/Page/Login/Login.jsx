import React from 'react';
import MyInput from '../../Component/Ui/MyInput';
import MyButton from '../../Component/Ui/MyButton';
import { AuthContext } from '../../Component/context/AuthContext';

function Login() {
  const { setIsAuth } = React.useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('isAuth', true);
  };
  return (
    <div>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин"></MyInput>
        <MyInput type="password" placeholder="Введите пароль"></MyInput>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}

export default Login;
