import { reduxForm } from 'redux-form';
import LoginForm from '../components/AuthorizationSection/LoginForm';
import {
  emailValidation,
  passwordValidation,
} from '../components/AuthorizationSection/validate';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const LoginFormContainer = reduxForm({
  form: 'login',
  validate,
})(LoginForm);

export default LoginFormContainer;
