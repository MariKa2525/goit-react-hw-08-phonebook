import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './page.module.css';

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <title>Registration</title>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
