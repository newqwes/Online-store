import React from 'react';
import PropTypes from 'prop-types';
import { JUSTIFY_CONTENT, ALIGN_ITEMS } from '../../constants/position';
import DIRECTION from '../../constants/direction';
import FlexWrapper from './styled';
import { childrenType } from '../../propType';

const Flex = ({ children, direction, justifyContent, alignItems }) => (
  <FlexWrapper justifyContent={justifyContent} alignItems={alignItems} direction={direction}>
    {children}
  </FlexWrapper>
);

Flex.propTypes = {
  children: childrenType.isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  direction: PropTypes.string,
};

Flex.defaultProps = {
  justifyContent: JUSTIFY_CONTENT.flexStart,
  alignItems: ALIGN_ITEMS.center,
  direction: DIRECTION.row,
};

export default Flex;
