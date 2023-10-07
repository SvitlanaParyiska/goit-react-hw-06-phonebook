import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { inputValue: '' };

const filterSlice = createSlice({
  // Имя слайса
  name: 'filter',
  // Начальное состояние редюсера слайса
  initialState: filterInitialState,
  // Объект редюсеров
  reducers: {
    setFilter(state, action) {
      state.inputValue = action.payload;
    },
    prepare: inputValue => {
      return {
        payload: inputValue,
      };
    },
  },
});

// Генераторы экшенов
export const { setFilter } = filterSlice.actions;

// Редюсер слайса
export const filterReducer = filterSlice.reducer;
