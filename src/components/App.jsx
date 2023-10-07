import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Notification text={'Your phonebook is empty. Add first contact!'} />
      )}

      <ContactList />
    </Container>
  );
};
