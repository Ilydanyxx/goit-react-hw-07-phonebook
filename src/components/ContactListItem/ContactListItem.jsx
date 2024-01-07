import React, { useState } from 'react';
import { deleteContact, editContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  }; 

  const handleEditMode = () => {

    setIsEditMode(prevState => !prevState);


    if (isEditMode) {
        const editedContact = {
            name: name.trim(),
            number: number.trim(),
            id: contact.id,
        }
        dispatch(editContact(editedContact))
    }




  }

  return (
    <li>
      {isEditMode ? (
        <div>
          <input type="text" name="name" value={name} onChange={handleChange}/>
          <input type="text" name="number" value={number} onChange={handleChange} />
        </div>
      ) : (
        <span>{`${contact.name}: ${contact.number}`}</span>
      )}

      <button type="button" onClick={handleEditMode}>
        {isEditMode ? 'Save' : 'Edit'}
      </button>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};