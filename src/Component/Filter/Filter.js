import React from 'react';
import styles from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => {
    return (
        <label>
            Find contacts by name
            <input
                className={styles.filter__input}
                type="text"
                name="search"
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
};

export default Filter;
