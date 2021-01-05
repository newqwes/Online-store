import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ item }) => (
  <li key={item.id}>
    <NavLink to={item.link}>{item.title}</NavLink>
  </li>
);

const navbarItemShape = {
  id: PropTypes.number,
  link: PropTypes.string,
  title: PropTypes.string,
};

MenuItem.propTypes = {
  item: PropTypes.shape(navbarItemShape).isRequired,
};

export default MenuItem;
