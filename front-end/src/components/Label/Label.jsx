import React from 'react';
import PropTypes from 'prop-types';
import LabelStyle from './styled';
import FONT_SIZE from '../../constants/fontSize';
import COLOR from '../../constants/color';

const Label = ({ text, ...other }) => <LabelStyle {...other}>{text}</LabelStyle>;

Label.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

Label.defaultProps = {
  fontSize: FONT_SIZE.large,
  color: COLOR.primary,
};

export default Label;
