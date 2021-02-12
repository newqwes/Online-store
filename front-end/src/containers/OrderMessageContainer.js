import { connect } from 'react-redux';

import { resetOrder } from '../actionCreators';
import OrderMessageSection from '../components/OrderMessageSection';

const mapStateToProps = ({ order }) => ({
  isSuccess: order.isSuccess,
});

const mapDispatchToProps = {
  resetOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderMessageSection);
