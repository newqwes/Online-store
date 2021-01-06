import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import FONT_SIZE from '../../constants/fontSize';
import { CustomNavLink, CustomLink } from './styled';
import THEME_VARIANT from '../../constants/themeVariant';

const Link = ({ href, to, fontSize, children, themeVariant, myStyle }) => {
  const Component = to ? CustomNavLink : CustomLink;

  return (
    <Component
      myStyle={myStyle}
      to={to}
      href={href}
      fontSize={fontSize}
      themeVariant={themeVariant}
    >
      {children}
    </Component>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  fontSize: PropTypes.number,
  children: PropTypes.any.isRequired,
  themeVariant: PropTypes.string,
  myStyle: stylePropType,
};

Link.defaultProps = {
  fontSize: FONT_SIZE.medium,
  themeVariant: THEME_VARIANT.default,
};

export default Link;
