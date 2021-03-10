import React from 'react';
import PropTypes from 'prop-types';

import DIRECTION from '../../constants/direction';
import { JUSTIFY_CONTENT, ALIGN_ITEMS, FLEX_BASIS } from '../../constants/position';

import FlexWrapper from './styled';

const Flex = ({ children, direction, justifyContent, alignItems, flexBasis, className }) => (
  <FlexWrapper
    justifyContent={justifyContent}
    alignItems={alignItems}
    direction={direction}
    flexBasis={flexBasis}
    className={className}>
    {children}
  </FlexWrapper>
);

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  className: PropTypes.string,
  flexBasis: PropTypes.string,
  direction: PropTypes.string,
};

Flex.defaultProps = {
  className: '',
  direction: DIRECTION.row,
  flexBasis: FLEX_BASIS.fill,
  alignItems: ALIGN_ITEMS.center,
  justifyContent: JUSTIFY_CONTENT.flexStart,
};

export default Flex;
