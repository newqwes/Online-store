import React from 'react';
import PropTypes from 'prop-types';
import AlignmentStyle from './styled';
import { HORIZONTAL, VERTICAL } from '../../constants/position';

const Alignment = ({ children, ...props }) => (
  <AlignmentStyle {...props}>{children}</AlignmentStyle>
);

Alignment.propTypes = {
  children: PropTypes.any,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
};

Alignment.defaultProps = {
  horizontal: HORIZONTAL.left,
  vertical: VERTICAL.center,
};

export default Alignment;
