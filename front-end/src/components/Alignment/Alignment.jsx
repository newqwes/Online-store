import React from 'react';
import PropTypes from 'prop-types';
import { HORIZONTAL, VERTICAL } from '../../constants/position';
import DIRECTION from '../../constants/direction';
import AlignmentStyle from './styled';

const Alignment = ({ children, horizontal, vertical, direction, shareStyles }) => (
  <AlignmentStyle
    horizontal={horizontal}
    vertical={vertical}
    direction={direction}
    shareStyles={shareStyles}
  >
    {children}
  </AlignmentStyle>
);

Alignment.propTypes = {
  children: PropTypes.any.isRequired,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
  direction: PropTypes.string,
  shareStyles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Alignment.defaultProps = {
  horizontal: HORIZONTAL.left,
  vertical: VERTICAL.center,
  direction: DIRECTION.row,
};

export default Alignment;
