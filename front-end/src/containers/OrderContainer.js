import { floor } from 'lodash';
import { getOr } from 'lodash/fp';
import { connect } from 'react-redux';

import { removeFromCart, addToCart } from '../actionCreators';

import OrderSection from '../components/OrderSection';

const getTotalPrice = (cart) => {
  const result = cart.reduce((sum, { count, options: { price } }) => sum + count * price, 0);
  return floor(result, 2);
};

const mapStateToProps = ({ cart, authorization }) => ({
  cart,
  isSuccess: getOr(false, 'isSuccess', authorization),
  email: getOr('', ['userData', 'email'], authorization),
  phone: getOr('', ['userData', 'phone'], authorization),
  totalPrice: getTotalPrice(cart),
});

const mapDispatchToProps = { removeFromCart, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(OrderSection);
