import { size, getOr } from 'lodash/fp';
import { connect } from 'react-redux';

import { logout } from '../actionCreators';

import Header from '../components/Header';

const mapStateToProps = ({ cart, authorization }) => ({
  cartItemsCount: size(cart),
  isSuccess: getOr(false, 'isSuccess', authorization),
  login: getOr('', ['userData', 'login'], authorization),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
