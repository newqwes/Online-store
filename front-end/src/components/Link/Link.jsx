import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkStyle, LinkStyle } from './styled';

const Link = ({ href, text, usual, fontSize, children }) => {
  if (usual) {
    return (
      <LinkStyle href={href} fontSize={fontSize}>
        {text || children}
      </LinkStyle>
    );
  }
  return (
    <NavLinkStyle to={href} fontSize={fontSize}>
      {text || children}
    </NavLinkStyle>
  );
};

Link.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  usual: PropTypes.bool,
  fontSize: PropTypes.number,
  children: PropTypes.elementType,
};

export default Link;
