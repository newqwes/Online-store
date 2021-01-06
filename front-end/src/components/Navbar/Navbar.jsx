import React from 'react';
import PropTypes from 'prop-types';
import { NavbarContent, NavbarWrapper } from './styled';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import NavbarItem from './NavbarItem';
import NAVBAR from '../../constants/navbar';
import PAGE_WIDTH from '../../constants/pageWidth';
import THEME_VARIANT from '../../constants/themevariant';
import navbarItemType from './propTypes/navbarItemType';

const Navbar = ({ items, ...other }) => {
  const mapItems = items.map((item) => <NavbarItem key={item.id} item={item} />);

  return (
    <NavbarWrapper>
      <NavbarContent {...other}>{mapItems}</NavbarContent>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(navbarItemType)).isRequired,
  horizontally: PropTypes.bool,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  pageWidth: PropTypes.number,
  themevariant: PropTypes.string,
};

Navbar.defaultProps = {
  horizontally: true,
  height: NAVBAR.height,
  fontSize: FONT_SIZE.small,
  fontWeight: FONT_WEIGHT.lightBold,
  pageWidth: PAGE_WIDTH.midle,
  themevariant: THEME_VARIANT.default,
};

export default Navbar;
