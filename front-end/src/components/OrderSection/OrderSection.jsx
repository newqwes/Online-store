import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';
import { OrderSectionContent, OrderSectionWrapper } from './styled';
import OrderList from './OrderList';

const OrderSection = ({ themeVariant, cart }) => (
  <OrderSectionWrapper themeVariant={themeVariant}>
    <OrderSectionContent themeVariant={themeVariant}>
      <OrderList cart={cart} />
    </OrderSectionContent>
  </OrderSectionWrapper>
);

OrderSection.propTypes = {
  themeVariant: PropTypes.string,
  cart: PropTypes.array,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
