import { getOr } from 'lodash/fp';
import { connect } from 'react-redux';

import { logout } from '../actionCreators';

import Header from '../components/Header';

const mapStateToProps = ({ cart, user }) => ({
  cartItemsCount: cart.reduce((sum, { count }) => sum + count, 0),
  isSuccess: getOr(false, 'isSuccess', user),
  userName: getOr('', ['userData', 'login'], user),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
