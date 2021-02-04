import React from 'react';
import PropTypes from 'prop-types';

import itemsType from './propTypes';

import FONT_WEIGHT from '../../constants/fontWeight';
import THEME_VARIANT from '../../constants/themeVariant';

import NavbarItem from './NavbarItem';

import { NavbarItems, NavbarWrapper } from './styled';

const Navbar = ({ menuItems, ...other }) => {
  const items = menuItems.map(({ id, link, title }) => (
    <NavbarItem key={id} link={link} title={title} />
  ));

  return (
    <NavbarWrapper {...other}>
      <NavbarItems {...other}>{items}</NavbarItems>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  menuItems: itemsType.isRequired,
  horizontally: PropTypes.bool,
  fontWeight: PropTypes.number,
  themeVariant: PropTypes.string,
};

Navbar.defaultProps = {
  horizontally: true,
  fontWeight: FONT_WEIGHT.lightBold,
  themeVariant: THEME_VARIANT.default,
};

export default Navbar;
