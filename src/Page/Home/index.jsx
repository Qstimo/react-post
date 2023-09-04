import React from 'react';

import s from './Home.module.scss';
import FormSubmit from '../../Component/Form/FormSubmit';
import Filter from '../../Component/Filter';
import CommetRender from '../../Component/CommetRender';
import Modal from '../../Component/Modal/Modal';
import MyButton from '../../Component/Ui/MyButton';
import { useComments } from '../../Component/hooks/useComment';
import PostData from '../../api/PostData';
import Loader from '../../Component/Ui/Loader/Loader';
import { useFitching } from '../../Component/hooks/useFitching';
import { getCountPages, getPaginationArray } from '../../utils/pages';
import Pagination from '../../Component/Ui/Pagination/Pagination';
import { useObserver } from '../../Component/hooks/useObserver';
import MySelect from '../../Component/Ui/select/MySelect';

function Home() {
  //Получение данных с сервера
  const [item, setComments] = React.useState([]);

  //Пагинация получения кол-ва страниц
  const [totalPage, setTotalPage] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [limitPage, setLimitPage] = React.useState(10);
  const arrayPage = getPaginationArray(totalPage);
  const pageChanged = (page) => {
    setPage(page);
  };
  const lastElement = React.useRef();

  //Рендеринг и фильтрация постов
  const [isCommentsLoading, erorrMessage, getItems] = useFitching(async () => {
    const response = await PostData.getComments(limitPage, page);
    const { data, headers } = response;
    const totalCount = headers['x-total-count'];
    setTotalPage(getCountPages(totalCount, limitPage));
    setComments([...item, ...data]);
  });

  React.useEffect(() => {
    getItems(limitPage, page);
  }, [page, limitPage]);

  useObserver(lastElement, page < totalPage, isCommentsLoading, () => {
    setPage(page + 1);
  });

  const [filter, setFilter] = React.useState({ sort: '', search: '' });

  const searchSortedComments = useComments(item, filter.sort, filter.search);

  //Создание и удаление поста
  const createComment = (newComment) => {
    setComments([...item, newComment]);
    setVisibility(false);
  };

  const removeComments = (id) => {
    setComments(item.filter((i) => i.id !== id));
  };

  const [visibility, setVisibility] = React.useState(false);

  return (
    <div className={s.root}>
      <Modal visibility={visibility} setVisibility={setVisibility}>
        <h3>Отправить комметарий:</h3>
        <FormSubmit createComment={createComment} />
      </Modal>
      <div className={s.contentOne}>
        <MySelect
          value={limitPage}
          onChange={(value) => setLimitPage(value)}
          defaultValue={'Колличество элементов на страннице'}
          options={[
            { value: 5, name: '5' },
            { value: 10, name: '10' },
            { value: 15, name: '15' },
            { value: -1, name: 'Все' },
          ]}
        />

        <div className="switch">
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle"></label>
        </div>
        <MyButton onClick={() => setVisibility(true)}>Отправить комментарий</MyButton>
        <h2>Комментрарии пользователей:</h2>
        <Filter filter={filter} setFilter={setFilter} />
        <hr />
        <div className={s.scrollbar}>
          {erorrMessage && <h1>Произошла ошибка{erorrMessage}</h1>}
          {isCommentsLoading && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
              <Loader />
            </div>
          )}

          {<CommetRender items={searchSortedComments} removeComments={removeComments} />}
          <div ref={lastElement} style={{ height: '10px', marginBottom: '10px' }}></div>
          <Pagination page={page} pageChanged={pageChanged} arrayPage={arrayPage} />
        </div>
      </div>
    </div>
  );
}

export default Home;
