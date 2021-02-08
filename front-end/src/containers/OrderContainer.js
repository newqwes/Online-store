import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import getInitialUserValues from '../utils/orderUtils.js';

import { removeFromCart, addToCart, submitOrder } from '../actionCreators';

import OrderSection from '../components/OrderSection';

import {
  telValidation,
  cityValidation,
  homeValidation,
  emailValidation,
  streetValidation,
  apartmentValidation,
} from '../components/OrderSection/validate';

const validate = ({ phone, email, city, home, street, apartment }) => ({
  city: cityValidation(city),
  home: homeValidation(home),
  phone: telValidation(phone),
  email: emailValidation(email),
  street: streetValidation(street),
  apartment: apartmentValidation(apartment),
});

const withReduxForm = reduxForm({
  form: 'order',
  validate,
});

const mapStateToProps = ({ cart, authorization, order }) => ({
  cart,
  initialValues: getInitialUserValues(authorization),
  orderSuccess: order.isSuccess,
});

const mapDispatchToProps = { removeFromCart, addToCart, submitOrder };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(OrderSection);
