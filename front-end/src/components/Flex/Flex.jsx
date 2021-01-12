import React from 'react';
import PropTypes from 'prop-types';
import { HORIZONTAL, VERTICAL } from '../../constants/position';
import DIRECTION from '../../constants/direction';
import FlexWrapper from './styled';

const Flex = ({ children, horizontal, vertical, direction }) => (
  <FlexWrapper horizontal={horizontal} vertical={vertical} direction={direction}>
    {children}
  </FlexWrapper>
);

Flex.propTypes = {
  children: PropTypes.any.isRequired,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
  direction: PropTypes.string,
};

Flex.defaultProps = {
  horizontal: HORIZONTAL.left,
  vertical: VERTICAL.center,
  direction: DIRECTION.row,
};

export default Flex;
