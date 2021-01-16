import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actionCreators';
import AuthorizationSection from '../components/AuthorizationSection';

class AuthorizationContainer extends React.Component {
  login = (values) => this.props.login(values);

  render() {
    return <AuthorizationSection login={this.login} />;
  }
}

AuthorizationContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(AuthorizationContainer);
