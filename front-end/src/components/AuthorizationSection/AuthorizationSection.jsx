import React from 'react';
import PropTypes from 'prop-types';

import SECTION_WIDTH from '../../constants/sectionWidth';
import THEME_VARIANT from '../../constants/themeVariant';

import { AuthorizationWrapper, AuthorizationContent } from './styled';

import LoginForm from './LoginForm';

const AuthorizationSection = ({ login, maxSectionWidth, themeVariant }) => (
  <AuthorizationWrapper themeVariant={themeVariant}>
    <AuthorizationContent maxSectionWidth={maxSectionWidth}>
      <LoginForm onSubmit={login} />
    </AuthorizationContent>
  </AuthorizationWrapper>
);

AuthorizationSection.propTypes = {
  maxSectionWidth: PropTypes.number,
  themeVariant: PropTypes.string,
  login: PropTypes.func.isRequired,
};

AuthorizationSection.defaultProps = {
  maxSectionWidth: SECTION_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};

export default AuthorizationSection;
