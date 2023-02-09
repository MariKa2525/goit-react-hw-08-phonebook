import PropTypes from 'prop-types';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

