import React from 'react';
import PropTypes from 'prop-types';
import ImageStyle from './styled';

const Image = ({ src, alt, size }) => (
  <ImageStyle size={size}>
    <img src={src} alt={alt} />
  </ImageStyle>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
};

Image.defaultProps = {
  alt: 'Пицца',
  size: 100,
};

export default Image;
