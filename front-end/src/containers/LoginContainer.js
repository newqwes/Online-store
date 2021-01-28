import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { login } from '../actionCreators';

import LoginSection from '../components/Authentication/LoginSection';
import { emailValidation, passwordValidation } from '../components/Authentication/validate';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const withReduxForm = reduxForm({
  form: 'login',
  validate,
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  login,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(LoginSection);
