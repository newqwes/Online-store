import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styled';

const Label = ({ text, fontSize }) => (
  <Wrapper fontSize={fontSize}>
    {text}
  </Wrapper>
);

Label.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};

Label.defaultProps = {
  text: '',
  fontSize: 3,
};

export default Label;
