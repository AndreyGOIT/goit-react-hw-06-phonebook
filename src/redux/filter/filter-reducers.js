import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './filter-actions';

export const filterReducer = createReducer('', {
  [filterContacts]: (state, { payload }) =>
    state.filter(({ name }) => name === payload),
});
