import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import FormSection from '../components/Authentication/FormSection';
import { emailValidation, passwordValidation } from '../components/Authentication/validate';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const withReduxForm = reduxForm({
  form: 'registration',
  validate,
});

// TODO add in the next merge
const withConnect = connect(null, null);

export default compose(withReduxForm, withConnect)(FormSection);
