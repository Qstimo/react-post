import React from 'react';

import s from './FormSubmit.module.scss';
import MyInput from '../Ui/MyInput';
import MyButton from '../Ui/MyButton';

function FormSubmit({ createComment }) {
  const [newComment, setNewComment] = React.useState({
    name: '',
    body: '',
  });
  const submitComment = (e) => {
    e.preventDefault();
    const newCommentId = {
      ...newComment,
      id: Date.now(),
    };
    createComment(newCommentId);
    setNewComment({ name: '', body: '' });
  };

  return (
    <form onSubmit={submitComment}>
      <MyInput
        type="text"
        value={newComment.name}
        placeholder="Имя"
        onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
      />

      <MyInput
        type="textarea"
        onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
        value={newComment.text}
        placeholder="комментрарий"
      />
      <MyButton type="submit">Отправить</MyButton>
    </form>
  );
}

export default FormSubmit;
