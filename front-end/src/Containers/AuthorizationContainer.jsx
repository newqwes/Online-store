import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthorizationPending } from '../actionCreators';
import AuthorizationSection from '../components/AuthorizationSection';

class AuthorizationContainer extends React.Component {
  getAuthorization = (values) => this.props.getAuthorizationPending(values);

  render() {
    return <AuthorizationSection getAuthorization={this.getAuthorization} />;
  }
}

AuthorizationContainer.propTypes = {
  getAuthorizationPending: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getAuthorizationPending,
};

export default connect(null, mapDispatchToProps)(AuthorizationContainer);
