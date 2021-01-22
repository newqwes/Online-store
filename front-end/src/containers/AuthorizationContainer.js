import { connect } from 'react-redux';
import { getOr } from 'lodash/fp';

import { login } from '../actionCreators';
import AuthorizationSection from '../components/AuthorizationSection';

const mapStateToProps = (state) => ({
  isSuccess: getOr(false, ['authorization', 'isSuccess'], state),
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationSection);
