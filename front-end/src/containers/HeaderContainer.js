import { connect } from 'react-redux';
import { getOr } from 'lodash/fp';

import Header from '../components/Header';

const mapStateToProps = (state) => ({
  cartItemsCount: getOr('0', ['cart', 'length'], state),
});

export default connect(mapStateToProps)(Header);
