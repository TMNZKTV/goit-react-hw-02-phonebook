import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import ContactForm from './Component/СontactForm/ContactForm';
import ContactList from './Component/ContactList/ContactList';
import Filter from './Component/Filter/Filter';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = data => {
        const newContact = {
            name: data.name,
            number: data.number,
            id: uuidv4(),
        };
        const normalizedContact = newContact.name.toLowerCase();

        this.state.contacts.some(
            contact => contact.name.toLowerCase() === normalizedContact,
        )
            ? alert(`${data.name} is already in Contacts!`)
            : this.setState(prevState => ({
                  contacts: [newContact, ...prevState.contacts],
              }));
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };
    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    getVisibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    render() {
        const visibleContacts = this.getVisibleContacts();

        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm addContact={this.addContact} />

                <h2>Contacts</h2>
                <Filter
                    onChange={this.changeFilter}
                    value={this.state.filter}
                />

                <ContactList
                    contacts={visibleContacts}
                    onDeleteContact={this.deleteContact}
                />
            </div>
        );
    }
}

export default App;
