import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsItems } from '../../redux/selectors';

export default function ContactForm() {
  const contacts = useSelector(selectContactsItems);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  };

  const createContact = e => {
    e.preventDefault();
    if (
      contacts.find(contact => {
        return contact.name === name.trim();
      })
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      name: name.trim(),
      phone: phone.trim(),
      id: nanoid(),
    };

    setName('');
    setPhone('');

    dispatch(addContact(newContact));
  };

  return (
    <form onSubmit={createContact}>
      <label htmlFor="name">
        {' '}
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="phone">
        {' '}
        Phone
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">
        Add contact
      </button>
    </form>
  );
}