import React from 'react';
import PropTypes from 'prop-types';
import FONT_SIZE from '../../constants/fontSize';
import { CustomNavLink, CustomLink } from './styled';
import THEME_VARIANT from '../../constants/themeVariant';

const Link = ({ href, to, fontSize, children, themeVariant, shareStyles }) => {
  const Component = to ? CustomNavLink : CustomLink;

  return (
    <Component styles={shareStyles} to={to} href={href} fontSize={fontSize} variant={themeVariant}>
      {children}
    </Component>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  fontSize: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType])
    .isRequired,
  themeVariant: PropTypes.string,
  shareStyles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Link.defaultProps = {
  fontSize: FONT_SIZE.medium,
  themeVariant: THEME_VARIANT.default,
};

export default Link;
