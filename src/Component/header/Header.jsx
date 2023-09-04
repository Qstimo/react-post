import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import MyButton from '../Ui/MyButton';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const uzerOut = () => {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
  };

  return (
    <div className={s.container}>
      <ul className={s.navigate}>
        <li>
          <Link className={s.link} to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className={s.link} to="/photos">
            Фотографии
          </Link>
        </li>
      </ul>
      <div className={s.uzer}>{isAuth && <MyButton onClick={uzerOut}>Выйти</MyButton>}</div>
    </div>
  );
}

export default Header;
