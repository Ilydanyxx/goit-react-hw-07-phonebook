import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export default function ContactList() {
  


  const contacts = useSelector(selectFilteredContacts);
  
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem contact={contact} key={contact.id} />
          
        );
      })}
    </ul>
  );
}