import React from 'react';
import PropTypes, { object } from 'prop-types';
import { NavLink } from 'react-router-dom';
import MenuStyle from './styled';
import fontSize from '../../constants/fontSize';
import fontWeight from '../../constants/fontWeight';

const MenuList = ({ items, ...other }) => {
  const mapItems = items.map((item) => (
    <li key={item.id}>
      <NavLink to={item.link}>{item.title}</NavLink>
    </li>
  ));

  return <MenuStyle {...other}>{mapItems}</MenuStyle>;
};

MenuList.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
  horizontally: PropTypes.bool,
  animationSide: PropTypes.string,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
};

MenuList.defaultProps = {
  animationSide: 'left',
  height: 12,
  fontSize: fontSize.small,
  fontWeight: fontWeight.lightBold,
};

export default MenuList;
