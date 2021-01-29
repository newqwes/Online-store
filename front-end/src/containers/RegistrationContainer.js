import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { registration } from '../actionCreators';

import FormSection from '../components/Authentication/FormSection';
import {
  telValidation,
  emailValidation,
  loginValidation,
  equalValidation,
  passwordValidation,
} from '../components/Authentication/validate';

const validate = ({ tel, email, login, password, repassword }) => ({
  tel: telValidation(tel),
  email: emailValidation(email),
  login: loginValidation(login),
  password: passwordValidation(password),
  repassword: equalValidation({ value: password, other: repassword }),
});

const withReduxForm = reduxForm({
  form: 'registration',
  validate,
});

const mapStateToProps = ({ authorization }) => ({
  authorization,
});

const mapDispatchToProps = {
  submit: registration,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(FormSection);
