import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperation';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p className={css.text}>{name}: </p>
      <span className={css.text}> {number} </span>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
