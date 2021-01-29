import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

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

const mapStateToProps = ({ authorization }) => ({
  authorization,
});

const mapDispatchToProps = {
  submit: login,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(FormSection);
