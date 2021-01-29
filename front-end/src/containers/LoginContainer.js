import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { login } from '../actionCreators';

import FormSection from '../components/Authentication/FormSection';
import { emailValidation, passwordValidation } from '../components/Authentication/validate';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const withReduxForm = reduxForm({
  form: 'login',
  validate,
});

const mapDispatchToProps = {
  submit: login,
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(FormSection);
