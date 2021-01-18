import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
