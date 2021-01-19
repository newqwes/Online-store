import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state) => ({
  count: state.cart.length,
});

export default connect(mapStateToProps)(Header);
