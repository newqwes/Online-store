import { reduxForm } from 'redux-form';
import LoginForm from '../components/Authentication/LoginForm';
import {
  emailValidation,
  passwordValidation,
} from '../components/Authentication/validate';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const LoginFormContainer = reduxForm({
  form: 'login',
  validate,
})(LoginForm);

export default LoginFormContainer;
