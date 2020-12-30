import React from 'react';
import PropTypes from 'prop-types';
import LabelStyle from './styled';
import FONT_SIZE from '../../constants/FONT_SIZE';

const Label = ({ text, fontSize }) => <LabelStyle fontSize={fontSize}>{text}</LabelStyle>;

Label.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};

Label.defaultProps = {
  fontSize: FONT_SIZE.large,
};

export default Label;
