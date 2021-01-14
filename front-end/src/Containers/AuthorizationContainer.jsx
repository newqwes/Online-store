import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthorizationPending } from '../actionCreators';
import AuthorizationSection from '../components/AuthorizationSection';

class AuthorizationContainer extends React.Component {
  render() {
    console.log(this.props.getAuthorizationPending);
    return <AuthorizationSection />;
  }
}

AuthorizationContainer.propTypes = {
  getAuthorizationPending: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getAuthorizationPending,
};

export default connect(null, mapDispatchToProps)(AuthorizationContainer);
