import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkStyle, LinkStyle } from './styled';

const MyLink = ({ href, isNavLink, fontSize, children }) => {
  const SharedLink = isNavLink ? NavLinkStyle : LinkStyle;

  return (
    <SharedLink to={href} href={href} fontSize={fontSize}>
      {children}
    </SharedLink>
  );
};

MyLink.propTypes = {
  href: PropTypes.string,
  isNavLink: PropTypes.bool,
  fontSize: PropTypes.number,
  children: PropTypes.any,
};

export default MyLink;
