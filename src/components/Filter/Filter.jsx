import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Title } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <div>
      <Title>Filter by name</Title>
      <Input
        type="text"
        name="filter"
        onChange={changeFilter}
        value={useSelector(getFilter)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};

export default Filter;
