import { getOr } from 'lodash/fp';
import { connect } from 'react-redux';

import { removeFromCart, addToCart } from '../actionCreators';

import OrderSection from '../components/OrderSection';

const mapStateToProps = ({ cart, authorization }) => ({
  cart,
  isSuccess: getOr(false, 'isSuccess', authorization),
  email: getOr('', ['userData', 'email'], authorization),
  phone: getOr('', ['userData', 'phone'], authorization),
});

const mapDispatchToProps = { removeFromCart, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(OrderSection);
