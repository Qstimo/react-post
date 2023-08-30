import React from 'react';

import s from './MySelect.module.scss';

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select className={s.root} value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((opt) => (
        <option className={s.option} key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
      ;
    </select>
  );
}

export default MySelect;
