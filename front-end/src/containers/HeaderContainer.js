import { size, getOr } from 'lodash/fp';
import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = ({ cart, authorization }) => ({
  cartItemsCount: size(cart),
  isSuccess: getOr(false, 'isSuccess', authorization),
});

export default connect(mapStateToProps)(Header);
