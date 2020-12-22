import React from 'react';
import PropTypes from 'prop-types';
import LabelStyle from './styled';

const Label = ({ text, fontSize }) => <LabelStyle fontSize={fontSize}>{text}</LabelStyle>;

Label.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};

Label.defaultProps = {
  text: '',
  fontSize: 3,
};

export default Label;
