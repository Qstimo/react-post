import React from 'react';
import s from './Pagination.module.scss';

function Pagination({ arrayPage, pageChanged, page }) {
  return (
    <div className={s.pagination}>
      {' '}
      {arrayPage.map((p) => (
        <span onClick={() => pageChanged(p)} className={p === page ? s.active : ''} key={p}>
          {p}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
