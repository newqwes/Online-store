import React from 'react';
import PropTypes from 'prop-types';

import SECTION_WIDTH from '../../constants/sectionWidth';
import THEME_VARIANT from '../../constants/themeVariant';
import { AuthorizationWrapper, AuthorizationContent } from './styled';
import Login from './Login';

const AuthorizationSection = ({ maxSectionWidth, themeVariant, getAuthorization }) => (
  <AuthorizationWrapper themeVariant={themeVariant}>
    <AuthorizationContent maxSectionWidth={maxSectionWidth}>
      <Login onSubmit={getAuthorization} />
    </AuthorizationContent>
  </AuthorizationWrapper>
);

AuthorizationSection.propTypes = {
  maxSectionWidth: PropTypes.number,
  themeVariant: PropTypes.string,
  getAuthorization: PropTypes.func.isRequired,
};

AuthorizationSection.defaultProps = {
  maxSectionWidth: SECTION_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};
export default AuthorizationSection;
