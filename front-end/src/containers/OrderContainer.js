import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import {
  telValidation,
  cityValidation,
  homeValidation,
  emailValidation,
  streetValidation,
  apartmentValidation,
} from '../utils/fieldValidation';

import getCart, { getTotalCartCost } from '../selectors/cart';
import { getEmailUser, getLoginUser, getPhoneUser } from '../selectors/authorization';

import { removeFromCart, addToCart, submitOrder } from '../actionCreators';

import OrderSection from '../components/OrderSection';

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

const mapStateToProps = (state) => ({
  cart: getCart(state),
  totalPrice: getTotalCartCost(state),
  initialValues: {
    email: getEmailUser(state),
    phone: getPhoneUser(state),
    login: getLoginUser(state),
  },
});

const mapDispatchToProps = { removeFromCart, addToCart, submitOrder };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(OrderSection);
