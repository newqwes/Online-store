import React from 'react';
import PropTypes from 'prop-types';
import LogoWrapper from './styled';

const Logo = (props) => (
  <LogoWrapper width={props.width} height={props.height}>
    <a href={props.href}></a>
  </LogoWrapper>
);

Logo.propTypes = {
  width: PropTypes.number,
  href: PropTypes.string,
  height: PropTypes.number,
};

Logo.defaultProps = {
  width: 150,
  height: 70,
};

export default Logo;
