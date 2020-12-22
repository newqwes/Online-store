import React from 'react';
import PropTypes from 'prop-types';
import LabelStyle from './styled';

const Label = ({ text, ...other }) => <LabelStyle {...other}>{text}</LabelStyle>;

Label.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  align: PropTypes.string,
  weight: PropTypes.string,
};

Label.defaultProps = {
  text: '',
  fontSize: 3,
  color: 'primary',
  align: 'left',
  weight: 'bold',
};

export default Label;
