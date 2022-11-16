import style from 'components/App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { useSelector } from 'react-redux';
import { getError, getLoading } from 'Redux/selectors';

export default function App() {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  return (
    <div className={style.main}>
      <h2 className={style.title}>Phonebook</h2>
      <ContactForm />
      <h3 className={style.title}>Contacts</h3>
      <Filter />
      {loading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
} 



