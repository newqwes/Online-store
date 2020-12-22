import React from 'react';
import PropTypes from 'prop-types';
import LogoWrapper from './styled';

const POSITION = [30, 100, 0];

const Logo = ({ width, href, position }) => (
  <LogoWrapper width={width} position={position}>
    <a href={href}></a>
  </LogoWrapper>
);

Logo.propTypes = {
  width: PropTypes.number,
  href: PropTypes.string,
  position: PropTypes.oneOf(POSITION),
};

Logo.defaultProps = {
  width: 150,
  position: 30,
};

export default Logo;
