import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contactList = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const getVisibleContacts = () => {
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className="container">
      <List>
        {visibleContacts.map(el => (
          <ContactItem contact={el} key={el.id} />
        ))}
      </List>
    </div>
  );
};

export default ContactList;
