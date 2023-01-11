import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
