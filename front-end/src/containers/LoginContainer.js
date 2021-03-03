import { compose } from 'redux';
import { getOr } from 'lodash/fp';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { login } from '../actionCreators';

import FormSection from '../components/Authentication';
import { emailValidation, passwordValidation } from '../utils/fieldValidation';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const withReduxForm = reduxForm({
  form: 'login',
  validate,
});

const mapStateToProps = state => ({
  isUserAuth: getOr(false, ['user', 'isUserAuth'], state),
});

const mapDispatchToProps = {
  submit: login,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(FormSection);
