import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const navbarItem = ({ title, link }) => (
  <li>
    <NavLink to={link}>{title}</NavLink>
  </li>
);

navbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default navbarItem;
