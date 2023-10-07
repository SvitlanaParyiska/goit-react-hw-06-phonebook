import React from 'react';
import { Button, Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <Item>
      <p>
        {contact.name} : {contact.number}
      </p>

      <Button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;
