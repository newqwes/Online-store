import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';

import { AuthorizationWrapper, AuthorizationContent } from './styled';

import LoginForm from './LoginForm';

const AuthorizationSection = ({ login, themeVariant }) => (
  <AuthorizationWrapper themeVariant={themeVariant}>
    <AuthorizationContent>
      <LoginForm onSubmit={login} />
    </AuthorizationContent>
  </AuthorizationWrapper>
);

AuthorizationSection.propTypes = {
  themeVariant: PropTypes.string,
  login: PropTypes.func.isRequired,
};

AuthorizationSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default AuthorizationSection;
