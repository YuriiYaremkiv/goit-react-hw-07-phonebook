import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter;

console.log('selectContacts', selectContacts);
console.log('selectFilter', selectFilter);

export const filteredContactsUser = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.toLowerCase().includes(filter));
  }
);
