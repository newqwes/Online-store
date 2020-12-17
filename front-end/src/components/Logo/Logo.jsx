import React from 'react';
import PropTypes from 'prop-types';
import LogoWrapper from './styled';

const Logo = ({ width, href }) => (
  <LogoWrapper width={width}>
    <a href={href}></a>
  </LogoWrapper>
);

Logo.propTypes = {
  width: PropTypes.number,
  href: PropTypes.string,
};

Logo.defaultProps = {
  width: 150,
};

export default Logo;
