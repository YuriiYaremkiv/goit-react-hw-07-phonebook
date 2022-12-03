import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from '../components/Progress/Progress';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from '../redux/operationsAPI';
import { getFilter, getContacts, getIsLoading } from 'redux/selectors';
import css from './app.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContactsUser =
    filter.length > 0
      ? contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter)
        )
      : null;

  const contactsList = filter.length > 0 ? filteredContactsUser : contacts;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {isLoading && <Progress />}
      {contacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <div className={css.contacts__container}>
            <Filter />
            <ContactList contacts={contactsList} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
