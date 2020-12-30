import React from 'react';
import PropTypes, { object } from 'prop-types';
import MenuStyle from './styled';
import FONT_SIZE from '../../constants/FONT_SIZE';
import FONT_WEIGHT from '../../constants/FONT_WEIGHT';
import MenuItem from '../MenuItem';
import MENU from '../../constants/MENU';

const Menu = ({ items, ...other }) => {
  const mapItems = items.map((item) => <MenuItem key={item.id} item={item} />);

  return <MenuStyle {...other}>{mapItems}</MenuStyle>;
};

Menu.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
  horizontally: PropTypes.bool,
  animationSide: PropTypes.string,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
};

Menu.defaultProps = {
  animationSide: MENU.animationSide,
  height: MENU.height,
  fontSize: FONT_SIZE.small,
  fontWeight: FONT_WEIGHT.lightBold,
};

export default Menu;
