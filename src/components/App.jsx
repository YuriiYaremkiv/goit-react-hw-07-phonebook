import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './app.module.scss';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useEffect } from 'react';

import { fetchContacts } from '../redux/operationsAPI';

import { filteredContactsUser } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = filteredContactsUser;
  console.log('filteredContacts', filteredContacts);

  const contactsList = filter.length > 0 ? filteredContacts : contacts;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <div className={css.contacts__container}>
            <Filter onChange={setFilter} />
            <ContactList contacts={contactsList} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
