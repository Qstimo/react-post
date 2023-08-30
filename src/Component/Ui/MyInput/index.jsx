import React from 'react';
import style from './MyInput.module.scss';

function MyInput({ children, ...props }) {
  return (
    <input className={style.input} {...props}>
      {children}
    </input>
  );
}

export default MyInput;
