import { connect } from 'react-redux';

import ProfileSection from '../components/ProfileSection';
import { getUserAuthStatus } from '../selectors/authorization';

const mapStateToProps = state => ({
  isUserAuth: getUserAuthStatus(state),
});

export default connect(mapStateToProps)(ProfileSection);
