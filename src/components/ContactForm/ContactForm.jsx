import { useState } from 'react';
import { Form, Button, Label, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';

export const ContactForm = ({ createContact }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactList = useSelector(state => state.contacts);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'number') {
      setNumber(value);
      return;
    } else {
      console.log('error');
    }
  };

  const handleSubmit = e => {
    const isAlreadyExist = contactList.find(el => el.name === name);
    if (isAlreadyExist) {
      return alert(`${name} is already in contacts.`);
    }
    e.preventDefault();
    dispatch(addContacts(name, number));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
