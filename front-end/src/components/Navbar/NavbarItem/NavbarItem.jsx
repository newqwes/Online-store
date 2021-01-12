import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ title, link }) => (
  <li>
    <NavLink to={link}>{title}</NavLink>
  </li>
);

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavbarItem;
