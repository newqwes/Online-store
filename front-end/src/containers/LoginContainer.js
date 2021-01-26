import { connect } from 'react-redux';

import { login } from '../actionCreators';
import LoginSection from '../components/Authentication/LoginSection/LoginSection.jsx';

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginSection);
