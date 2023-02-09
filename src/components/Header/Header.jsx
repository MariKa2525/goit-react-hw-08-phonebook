import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
      </section>
    </header>
  );
};
