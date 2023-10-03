import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';
import Notification from './Notification/Notification';

const contactsDefault = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [...contactsDefault]
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (nameByForm, numberByForm) => {
    const isAlreadyExist = contacts.find(el => el.name === nameByForm);
    if (isAlreadyExist) {
      return alert(`${nameByForm} is already in contacts.`);
    }
    const newContact = {
      id: nanoid(),
      name: nameByForm,
      number: numberByForm,
    };
    setContacts(prev => [newContact, ...prev]);
  };

  const handleDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter filterContact={changeFilter} />
      ) : (
        <Notification text={'Your phonebook is empty. Add first contact!'} />
      )}

      <ContactList contactList={visibleContacts} handleDelete={handleDelete} />
    </Container>
  );
};
