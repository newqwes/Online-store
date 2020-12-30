import React from 'react';
import PropTypes from 'prop-types';
import AlignmentStyle from './styled';
import { HORIZONTAL, VERTICAL } from '../../constants/POSITION';
import GAP from '../../constants/GAP';

const Alignment = ({ children, ...props }) => (
  <AlignmentStyle {...props}>{children}</AlignmentStyle>
);

Alignment.propTypes = {
  children: PropTypes.any,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
  gap: PropTypes.number,
};

Alignment.defaultProps = {
  horizontal: HORIZONTAL.left,
  vertical: VERTICAL.center,
  gap: GAP.normal,
};

export default Alignment;
