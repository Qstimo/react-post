import React from 'react';
import MyInput from './Ui/MyInput';
import MySelect from './Ui/select/MySelect';

function Filter({ filter, setFilter }) {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
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
        style={{ position: 'relative' }}
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        placeholder="Поиск по комментариям"></MyInput>
    </div>
  );
}

export default Filter;
