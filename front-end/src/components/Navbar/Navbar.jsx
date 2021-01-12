import React from 'react';
import PropTypes from 'prop-types';
import { NavbarItems, NavbarWrapper } from './styled';

import NavbarItem from './NavbarItem';
import itemsType from './propTypes';

import FONT_WEIGHT from '../../constants/fontWeight';
import PAGE_WIDTH from '../../constants/pageWidth';
import THEME_VARIANT from '../../constants/themeVariant';

const Navbar = ({ items, ...other }) => {
  const mapItems = items.map((item) => (
    <NavbarItem key={item.id} link={item.link} title={item.title} />
  ));

  return (
    <NavbarWrapper {...other}>
      <NavbarItems {...other}>{mapItems}</NavbarItems>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  items: itemsType.isRequired,
  horizontally: PropTypes.bool,
  fontWeight: PropTypes.number,
  pageWidth: PropTypes.number,
  themeVariant: PropTypes.string,
};

Navbar.defaultProps = {
  horizontally: true,
  fontWeight: FONT_WEIGHT.lightBold,
  pageWidth: PAGE_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};

export default Navbar;
