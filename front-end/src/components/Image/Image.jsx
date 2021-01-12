import React from 'react';
import PropTypes from 'prop-types';
import ImageWrapper from './styled';
import ICON_SIZE from '../../constants/iconSize';

const Image = ({ src, alt, size }) => (
  <ImageWrapper size={size}>
    <img src={src} alt={alt} />
  </ImageWrapper>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Image.defaultProps = {
  size: ICON_SIZE.imageMedium,
};

export default Image;
