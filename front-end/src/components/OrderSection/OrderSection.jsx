import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';
import OrderSectionWrapper from './styled';
import OrderList from './OrderList';
import { productsType } from '../../propType';

const OrderSection = ({ themeVariant, cart }) => (
  <OrderSectionWrapper themeVariant={themeVariant}>
    <OrderList cart={cart} />
  </OrderSectionWrapper>
);

OrderSection.propTypes = {
  themeVariant: PropTypes.string,
  cart: productsType.isRequired,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
