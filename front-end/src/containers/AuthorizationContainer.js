import { connect } from 'react-redux';

import { login } from '../actionCreators';
import AuthorizationSection from '../components/AuthorizationSection';

const mapStateToProps = (state) => ({
  isSuccess: state.authorization.isSuccess,
});
const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationSection);
