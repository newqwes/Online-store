import React from 'react';
import PropTypes from 'prop-types';
import CardPropertiesStyle from './styled';

const CardProperties = ({ children }) => <CardPropertiesStyle>{children}</CardPropertiesStyle>;

CardProperties.propTypes = {
  children: PropTypes.array,
};

export default CardProperties;
