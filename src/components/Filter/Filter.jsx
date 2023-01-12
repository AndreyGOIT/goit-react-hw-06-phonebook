import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={styles.filterBlock}>
      <p className={styles.filterTitle}>Find contacts by name</p>
      <input
        type="text"
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
