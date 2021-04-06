import React, { Component } from 'react';
import styles from '../СontactForm/ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSumbit = event => {
        event.preventDefault();
        this.reset();
        this.props.addContact(this.state);
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSumbit}>
                    <label className={styles.form__label}>
                        Name
                        <input
                            className={styles.form__input}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={styles.form__label}>
                        Number
                        <input
                            className={styles.form__input}
                            type="tel"
                            name="number"
                            // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                            required
                            value={this.state.number}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className={styles.form__button} type="submit">
                        Add contact
                    </button>
                </form>
            </>
        );
    }
}

export default ContactForm;
