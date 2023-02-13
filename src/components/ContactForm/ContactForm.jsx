import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  const createContact = (contact) => {
    if (contacts) {
    const double = contacts.find(
        item =>
          item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      )
      if (double) {
        return Notiflix.Report.failure(`${contact.name} is already in contacts`);
      }
      dispatch(addContact(contact));
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    createContact({
      name,
      number,
      id: nanoid(),
    });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrap}>
        <label className={css.label} htmlFor="exampleNameInputId">
          {' '}
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label} htmlFor="exampleNumberInputId">
          {' '}
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <div className={css.wrap}>
        <button className={css.button} type="submit">
          Add Contacts
        </button>
      </div>
    </form>
  );
};

