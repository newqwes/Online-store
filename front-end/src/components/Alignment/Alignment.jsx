import React from 'react';
import PropTypes from 'prop-types';
import AlignmentStyle from './styled';
import { HORIZONTAL, VERTICAL } from '../../constants/position';
import GAP from '../../constants/gap';

const Alignment = ({ children, ...props }) => (
  <AlignmentStyle {...props}>{children}</AlignmentStyle>
);

Alignment.propTypes = {
  children: PropTypes.any,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
  childrenMarginRight: PropTypes.number,
};

Alignment.defaultProps = {
  horizontal: HORIZONTAL.left,
  vertical: VERTICAL.center,
  childrenMarginRight: GAP.normal,
};

export default Alignment;
