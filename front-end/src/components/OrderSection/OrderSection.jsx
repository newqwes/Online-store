import React from 'react';
import PropTypes from 'prop-types';
import { get, compose, head, noop } from 'lodash/fp';
import { Redirect } from 'react-router-dom';

import cartCost from '../../utils/cartUtils';
import { productsType } from '../../propType';

import DIRECTION from '../../constants/direction';
import THEME_VARIANT from '../../constants/themeVariant';
import ORDER_FIELDS from '../../constants/orderFields';
import ROUTER_PATH from '../../constants/routerPath';

import Flex from '../Flex';
import Label from '../Label';
import Button from '../Button';
import FieldList from '../FieldList';
import InputField from '../InputField';
import TotalPrice from '../TotalPrice';
import CartItems from '../CartSection/CartItems';

import { OrderSectionWrapper, OrderSectionContent, InputFieldContent } from './styled';

const OrderSection = ({
  cart,
  addToCart,
  submitOrder,
  handleSubmit,
  themeVariant,
  removeFromCart,
  isOrderSuccess,
}) => {
  if (isOrderSuccess) return <Redirect to={ROUTER_PATH.orderSuccessMessage} />;

  const submit = (customer) => submitOrder({ cart, customer });

  const currencySign = compose(get('currencySign'), head)(cart);

  const totalPrice = cartCost(cart);

  return (
    <OrderSectionWrapper themeVariant={themeVariant}>
      <OrderSectionContent themeVariant={themeVariant}>
        <Flex direction={DIRECTION.column} flexBasis='60%'>
          <Label text='Оформление заказа' className='order-section__label' />
          <form onSubmit={handleSubmit(submit)}>
            <Flex direction={DIRECTION.column}>
              <FieldList
                fields={ORDER_FIELDS}
                component={InputField}
                fieldStyle={InputFieldContent}
              />
              <Button text='Отправить' onClick={noop} />
            </Flex>
          </form>
        </Flex>
        <Flex direction={DIRECTION.column} flexBasis='40%'>
          <Label text='Ваш заказ' className='order-section__label' />
          <Flex direction={DIRECTION.column} className='order-section__cart'>
            <CartItems cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
            <TotalPrice totalPrice={totalPrice} currencySign={currencySign} text='Сумма заказа: ' />
          </Flex>
        </Flex>
      </OrderSectionContent>
    </OrderSectionWrapper>
  );
};

OrderSection.propTypes = {
  cart: productsType.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  submitOrder: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  isOrderSuccess: PropTypes.bool.isRequired,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
