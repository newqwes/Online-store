import { reduxForm } from 'redux-form';
import RegistrationForm from '../components/Authentication/RegistrationForm';
import { emailValidation, passwordValidation } from '../components/Authentication/validate';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const RegistrationFormContainer = reduxForm({
  form: 'registration',
  validate,
})(RegistrationForm);

export default RegistrationFormContainer;
