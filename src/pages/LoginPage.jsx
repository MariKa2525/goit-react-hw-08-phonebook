import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './page.module.css';

const LoginPage = () => {
  return (
    <div className={css.container}>
      <title>Login</title>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
