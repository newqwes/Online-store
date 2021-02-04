import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { removeFromCart, addToCart, submitOrder } from '../actionCreators';

import { emailValidation, passwordValidation } from '../components/Authentication/validate';

import OrderSection from '../components/OrderSection';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const withReduxForm = reduxForm({
  form: 'order',
  validate,
});

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = { removeFromCart, addToCart, submitOrder };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(OrderSection);
