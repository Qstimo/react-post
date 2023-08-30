import React from 'react';
import axios from 'axios';

import comments from '../../ArrCommit';
import s from './Home.module.scss';
import FormSubmit from '../Form/FormSubmit';
import Filter from '../Filter';
import CommetRender from '../CommetRender';
import Modal from '../Modal/Modal';
import MyButton from '../Ui/MyButton';
import { useComments } from '../hooks/useComment';
import PostData from '../../api/PostData';

function Home() {
  const [item, setComments] = React.useState([]);
  const createComment = (newComment) => {
    setComments([...item, newComment]);
    setVisibility(false);
  };

  const [isCommentsLoading, setIsCommentsLoading] = React.useState(false);

  const getItems = async () => {
    const data = await PostData.getComments();
    setComments(data);
  };
  React.useEffect(() => {
    getItems();
  }, []);
  const [filter, setFilter] = React.useState({ sort: '', search: '' });

  const searchSortedComments = useComments(item, filter.sort, filter.search);

  const removeComments = (id) => {
    setComments(item.filter((i) => i.id !== id));
  };

  const [visibility, setVisibility] = React.useState(false);

  return (
    <div className={s.root}>
      <Modal visibility={visibility} setVisibility={setVisibility}>
        {' '}
        <h3>Отправить комметарий:</h3>
        <FormSubmit createComment={createComment} />
      </Modal>
      <div className={s.contentOne}>
        <MyButton onClick={() => setVisibility(true)}>Отправить комментарий</MyButton>
        <h2>Комментрарии пользователей:</h2>
        <Filter filter={filter} setFilter={setFilter} />
        <div className={s.scrollbar}>
          <CommetRender items={searchSortedComments} removeComments={removeComments} />
        </div>
      </div>
    </div>
  );
}

export default Home;
