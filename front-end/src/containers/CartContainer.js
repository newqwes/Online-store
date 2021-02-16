import { connect } from 'react-redux';

import { removeFromCart, addToCart } from '../actionCreators';

import CartSection from '../components/CartSection';

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = { removeFromCart, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartSection);
