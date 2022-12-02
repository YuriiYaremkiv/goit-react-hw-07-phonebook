import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operationsAPI';

export const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.items = actions.payload;
    },
    [fetchContacts.rejected](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.error = actions.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, actions) {
      state.contacts.isLoading = true;
      state.contacts.items = [...state.contacts.items, actions.payload];
    },
    [addContact.rejected](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.error = actions.payload;
    },
  },
});

export default phoneBookSlice.reducer;

// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }
