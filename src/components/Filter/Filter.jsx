import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilterValue = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <>
      <div className={css.wrap}>
        <h2 className={css.title}>Contacts</h2>
      </div>
      <div className={css.container}>
        <label className={css.label}>
          Find contacts by name
          <input
            className={css.input}
            type="text"
            name="contacts"
            value={filter}
            onChange={changeFilterValue}
            required
          />
        </label>
      </div>
    </>
  );
};
