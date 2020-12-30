import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkStyle, LinkStyle } from './styled';

const Link = ({ href, isNavLink, fontSize, children }) => {
  if (isNavLink) {
    return (
      <NavLinkStyle to={href} fontSize={fontSize}>
        {children}
      </NavLinkStyle>
    );
  }

  return (
    <LinkStyle href={href} fontSize={fontSize}>
      {children}
    </LinkStyle>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  isNavLink: PropTypes.bool,
  fontSize: PropTypes.number,
  children: PropTypes.any,
};

export default Link;
