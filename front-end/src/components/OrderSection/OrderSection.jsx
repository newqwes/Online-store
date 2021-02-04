import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import DIRECTION from '../../constants/direction';
import THEME_VARIANT from '../../constants/themeVariant';

import { productsType } from '../../propType';

import Flex from '../Flex';
import Label from '../Label';
import Button from '../Button';
import InputField from './InputField';
import TotalPrice from '../TotalPrice';
import CartItems from '../CartSection/CartItems';

import { OrderSectionWrapper, OrderSectionContent } from './styled';

const OrderSection = ({
  cart,
  addToCart,
  submitOrder,
  handleSubmit,
  themeVariant,
  removeFromCart,
}) => (
  <OrderSectionWrapper themeVariant={themeVariant}>
    <OrderSectionContent themeVariant={themeVariant}>
      <Flex direction={DIRECTION.column} flexBasis='60%'>
        <Label text='Оформление заказа' className='order-section__label' />
        <form onSubmit={handleSubmit(submitOrder)}>
          <Flex direction={DIRECTION.column}>
            <Field
              component={InputField}
              name='city'
              label='Город'
              type='text'
              placeholder='Гродно'
            />
            <Field
              component={InputField}
              name='street'
              label='Улица'
              type='text'
              placeholder='Ленина'
            />
            <Field component={InputField} name='home' label='Дом' type='text' placeholder='19' />
            <Button text='Отправить' />
          </Flex>
        </form>
      </Flex>
      <Flex direction={DIRECTION.column} flexBasis='40%'>
        <Label text='Ваш заказ' className='order-section__label' />
        <Flex direction={DIRECTION.column} className='order-section__cart'>
          <CartItems cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
          <TotalPrice cart={cart} />
        </Flex>
      </Flex>
    </OrderSectionContent>
  </OrderSectionWrapper>
);

OrderSection.propTypes = {
  cart: productsType.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  submitOrder: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
