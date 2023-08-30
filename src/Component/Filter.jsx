import React from 'react';
import MyInput from './Ui/MyInput';
import MySelect from './Ui/select/MySelect';

function Filter({ filter, setFilter }) {
  return (
    <div>
      {' '}
      <div className="" style={{ marginBottom: '15px' }}>
        <MySelect
          value={filter.sort}
          onChange={(e) => setFilter({ ...filter, sort: e })}
          defaultValue="Сортировка "
          options={[
            { name: 'По имени', value: 'name' },
            { name: 'По комментариям', value: 'body' },
          ]}
        />
      </div>
      <MyInput
        style={{ position: 'relative', right: '10px' }}
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        placeholder="Поиск по комментариям"></MyInput>
      <hr />
    </div>
  );
}

export default Filter;
