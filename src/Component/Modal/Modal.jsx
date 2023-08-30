import React from 'react';

import s from './Modal.module.scss';

function Modal({ children, visibility, setVisibility }) {
  return (
    <div
      className={[s.modal, visibility ? s.active : ''].join(' ')}
      onClick={() => setVisibility(false)}>
      <div onClick={(e) => e.stopPropagation()} className={s.content}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
