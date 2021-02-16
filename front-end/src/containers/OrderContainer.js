import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { get } from 'lodash/fp';

import getInitialUserValues from '../selectors/userValues';

import { removeFromCart, addToCart, submitOrder } from '../actionCreators';

import OrderSection from '../components/OrderSection';

import {
  telValidation,
  cityValidation,
  homeValidation,
  emailValidation,
  streetValidation,
  apartmentValidation,
} from '../utils/fieldValidation';

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
  cart: get('cart', state),
  initialValues: getInitialUserValues(state),
});

const mapDispatchToProps = { removeFromCart, addToCart, submitOrder };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(OrderSection);
