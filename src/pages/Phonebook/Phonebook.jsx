import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../../components/Form';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';
import styles from '../../components/phoneBook.module.css';
import {
  fetchAllContacts,
  fetchAddContacts,
  fetchDeleteContacts,
} from 'redux/contacts/contacts-operations';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number, main }) => {
    dispatch(fetchAddContacts({ name, number, main }));
  };

  const onDelete = id => {
    dispatch(fetchDeleteContacts(id));
  };

  const onChangeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Phonebook</h2>
      <Form onSubmit={handleAddContact} />
      <div className={styles.blockContact}>
        <h2 className={styles.title}>Contacts</h2>
        <Filter onChangeFilter={onChangeFilter} value={filter} />
        {isContacts && (
          <Contacts contacts={filteredContacts} onDelete={onDelete} />
        )}
        {!isContacts && <p>There are no contacts in your Phone Book...</p>}
      </div>
    </div>
  );
};

export default Phonebook;
