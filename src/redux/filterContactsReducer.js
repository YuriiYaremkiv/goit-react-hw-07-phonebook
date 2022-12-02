import { createSlice } from '@reduxjs/toolkit';

export const filterContactsReducer = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact: (state, actions) => {
      return (state.filter = actions.payload);
    },
  },
});

export const { filterContact } = filterContactsReducer.actions;
