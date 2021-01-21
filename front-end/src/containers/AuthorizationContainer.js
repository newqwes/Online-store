import { connect } from 'react-redux';

import { login } from '../actionCreators';
import AuthorizationSection from '../components/AuthorizationSection';

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(AuthorizationSection);
