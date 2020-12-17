import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styled';

const Title = ({ text, color, fontSize, tag }) => (
  <Wrapper fontSize={fontSize} as={tag} color={color}>
    {text}
  </Wrapper>
);

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  tag: PropTypes.tag,
};

Title.defaultProps = {
  text: '',
  color: '#000',
  fontSize: 3,
  tag: 'h3',
};

export default Title;
