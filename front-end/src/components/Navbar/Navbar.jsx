import React from 'react';
import PropTypes from 'prop-types';
import { NavbarItems, NavbarWrapper } from './styled';

import NavbarItem from './NavbarItem';
import itemsType from './propTypes';

import FONT_WEIGHT from '../../constants/fontWeight';
import THEME_VARIANT from '../../constants/themeVariant';

const Navbar = ({ menuItems, ...other }) => {
  const mapItems = menuItems.map(({ id, link, title }) => (
    <NavbarItem key={id} link={link} title={title} />
  ));

  return (
    <NavbarWrapper {...other}>
      <NavbarItems {...other}>{mapItems}</NavbarItems>
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
