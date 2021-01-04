import React from 'react';
import PropTypes from 'prop-types';
import MenuStyle from './styled';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import MenuItem from './MenuItem';
import MENU from '../../constants/menu';
import menuItemShape from './menuItemShape';

const Menu = ({ items, ...other }) => {
  const mapItems = items.map((item) => <MenuItem key={item.id} item={item} />);

  return <MenuStyle {...other}>{mapItems}</MenuStyle>;
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(menuItemShape)).isRequired,
  horizontally: PropTypes.bool,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
};

Menu.defaultProps = {
  height: MENU.height,
  fontSize: FONT_SIZE.small,
  fontWeight: FONT_WEIGHT.lightBold,
};

export default Menu;
