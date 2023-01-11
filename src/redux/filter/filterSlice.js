import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.users = state.users.filter(({ name }) => name === payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;
