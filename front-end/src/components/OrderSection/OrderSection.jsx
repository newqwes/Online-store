import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { get, compose, head, isEmpty } from 'lodash/fp';

import { productsType } from '../../propType';

import DIRECTION from '../../constants/direction';
import ROUTER_PATH from '../../constants/routerPath';
import ORDER_FIELDS from '../../constants/orderFields';
import THEME_VARIANT from '../../constants/themeVariant';

import Flex from '../Flex';
import Label from '../Label';
import Button from '../Button';
import FieldList from '../FieldList';
import InputField from '../InputField';
import TotalPrice from '../TotalPrice';
import CartItems from '../CartSection/CartItems';

import { OrderSectionWrapper, OrderSectionContent, InputFieldContent } from './styled';

const OrderSection = ({
  totalCartPrice,
  cart,
  addToCart,
  submitOrder,
  handleSubmit,
  themeVariant,
  removeFromCart,
}) => {
  const history = useHistory();

  const submit = (customer) => {
    if (isEmpty(cart)) return;

    submitOrder({ cart, customer });
    history.push(ROUTER_PATH.orderSuccessMessage);
  };

  const currencySign = compose(get('currencySign'), head)(cart);

  return (
    <OrderSectionWrapper themeVariant={themeVariant}>
      <OrderSectionContent themeVariant={themeVariant}>
        <Flex direction={DIRECTION.column} flexBasis='60%'>
          <Label text='Оформление заказа' className='order-section__label' />
          <form>
            <Flex direction={DIRECTION.column}>
              <FieldList
                fields={ORDER_FIELDS}
                component={InputField}
                fieldStyle={InputFieldContent}
              />
              <Button text='Отправить' onClick={handleSubmit(submit)} />
            </Flex>
          </form>
        </Flex>
        <Flex direction={DIRECTION.column} flexBasis='40%'>
          <Label text='Ваш заказ' className='order-section__label' />
          <Flex direction={DIRECTION.column} className='order-section__cart'>
            <CartItems cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
            <TotalPrice
              value={totalCartPrice}
              currencySign={currencySign}
              labelText='Сумма заказа: '
            />
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
  totalCartPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
