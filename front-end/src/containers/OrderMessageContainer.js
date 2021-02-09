import { connect } from 'react-redux';

import { deleteOrder } from '../actionCreators';
import OrderMessageSection from '../components/OrderMessageSection';

const mapStateToProps = ({ order }) => ({
  isSuccess: order.isSuccess,
});

const mapDispatchToProps = {
  deleteOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderMessageSection);
