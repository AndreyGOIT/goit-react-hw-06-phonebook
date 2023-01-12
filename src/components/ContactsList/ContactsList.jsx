import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/filter/filter-selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();

  return (
    <section className={styles.section}>
      <ul>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
