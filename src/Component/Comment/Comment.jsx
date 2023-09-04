import React from 'react';
import s from './CommentStyle.module.scss';
import MyButton from '../Ui/MyButton';
import { Link, useNavigate } from 'react-router-dom';

function Comment({ title, number, body, id, name, email, removeComments }) {
  const navigate = useNavigate();

  return (
    <div className={s.root}>
      <button onClick={() => removeComments(id)} className={s.clear}>
        <svg
          width="82px"
          height="82px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M9 9L15 15"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{' '}
            <path
              d="M15 9L9 15"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{' '}
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></circle>{' '}
          </g>
        </svg>
      </button>
      <MyButton onClick={() => navigate(`/comments/${id}`)}>Открыть</MyButton>
      <div className={s.title}>
        <span>{id}</span>
        <div className={s.name}>
          <h3>{email}</h3>
        </div>
      </div>
      <h4 className={s.text}>{name}</h4>
      <p>{body}</p>
    </div>
  );
}

export default Comment;
