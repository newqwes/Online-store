import React from 'react';
import PropTypes from 'prop-types';
import ImageStyle from './styled';

const Image = ({ src, alt, size }) => (
  <ImageStyle size={size}>
    <img src={src} alt={alt} />
  </ImageStyle>
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number,
};

Image.defaultProps = {
  src: 'https://images.dominos.by/media/dominos/osg/api/2019/10/18/fermerskaya_small.png',
  alt: 'Фермерская',
  size: 100,
};

export default Image;
