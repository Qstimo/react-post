import React from 'react';
import s from './MyButton.module.scss';

function MyInput({ children, ...props }) {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
}

export default MyInput;
