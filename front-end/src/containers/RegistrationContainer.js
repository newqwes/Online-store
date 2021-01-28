import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import RegistrationSection from '../components/Authentication/RegistrationSection';
import { emailValidation, passwordValidation } from '../components/Authentication/validate';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const withReduxForm = reduxForm({
  form: 'registration',
  validate,
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(RegistrationSection);
