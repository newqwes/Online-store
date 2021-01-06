import React from 'react';
import PropTypes from 'prop-types';
import FONT_SIZE from '../../constants/fontSize';
import { CustomNavLink, CustomLink } from './styled';
import THEME_VARIANT from '../../constants/themevariant';

const Link = ({ href, to, fontSize, children, themevariant, otherstyles }) => {
  const Component = to ? CustomNavLink : CustomLink;

  return (
    <Component
      otherstyles={otherstyles}
      to={to}
      href={href}
      fontSize={fontSize}
      themevariant={themevariant}
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
  themevariant: PropTypes.string,
  otherstyles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Link.defaultProps = {
  fontSize: FONT_SIZE.medium,
  themevariant: THEME_VARIANT.default,
};

export default Link;
