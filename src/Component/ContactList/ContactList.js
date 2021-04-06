import React from 'react';
import styles from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.contacts}>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li className={styles.contacts__item} key={id}>
                        <span>
                            {name} : {number}
                        </span>
                        <button
                            className={styles.contacts__button}
                            onClick={() => onDeleteContact(id)}
                        >
                            Удалить
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func,
};

export default ContactList;
