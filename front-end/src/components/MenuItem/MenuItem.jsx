import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ item }) => (
  <li key={item.id}>
    <NavLink to={item.link}>{item.title}</NavLink>
  </li>
);

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuItem;
