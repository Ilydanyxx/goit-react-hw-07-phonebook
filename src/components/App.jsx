import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContactsError, selectContactsIsLoading } from '.././redux/selectors';
import { Audio } from 'react-loader-spinner';

export function App() {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {error !== null && <p>Oops, an error has occurred...</p>}
      {isLoading && (
        <Audio height="100" width="100" color="black" ariaLabel="loading" />
      )}
      <ContactList />
    </div>
  );
}