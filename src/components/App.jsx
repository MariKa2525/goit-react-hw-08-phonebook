import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactOperation';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelector';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <ContactForm />
      {isLoading && !error && <p>Loading...</p>}
      <Filter />
      <ContactList />
    </Layout>
  );
};
