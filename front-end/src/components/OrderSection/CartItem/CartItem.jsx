import React from 'react';
import PropTypes from 'prop-types';
import { getOr } from 'lodash/fp';

import Flex from '../../Flex';
import Label from '../../Label';
import Button from '../../Button';
import Сurrency from '../../Сurrency';

import {
  CartItemContent,
  CartPhotoContent,
  CartDescriptionContent,
  CartPriceContent,
} from './styled';
import { productType } from '../../../propType';

import FONT_SIZE from '../../../constants/fontSize';
import FONT_WEIGHT from '../../../constants/fontWeight';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../../constants/position';

const CartItem = ({ item, removeFromCart, addToCart }) => {
  const { photoUrl, name, description, options, unitSign, currencySign, count } = item;

  const price = getOr(0, 'price', options);
  const weight = getOr(0, 'weight', options);

  const addOne = () => addToCart(item);
  const removeOne = () => removeFromCart(item);

  return (
    <CartItemContent>
      <Flex justifyContent={JUSTIFY_CONTENT.spaceBetween} alignItems={ALIGN_ITEMS.stretch}>
        <CartPhotoContent backgroundImage={photoUrl} />
        <CartDescriptionContent>
          <Label text={name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.normal} />
          <Label
            text={`Описание: ${description}`}
            fontSize={FONT_SIZE.small}
            fontWeight={FONT_WEIGHT.normal}
          />
        </CartDescriptionContent>
        <CartPriceContent>
          <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
            <Сurrency
              value={weight}
              fontSize={FONT_SIZE.small}
              fontWeight={FONT_WEIGHT.normal}
              postfix={unitSign}
            />
          </Flex>
          <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
            <Сurrency
              value={price}
              fontSize={FONT_SIZE.small}
              fontWeight={FONT_WEIGHT.normal}
              postfix={currencySign}
            />
          </Flex>
          <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
            <Button text='-' onClick={removeOne} />
            <Label text={count} fontSize={FONT_SIZE.small} fontWeight={FONT_WEIGHT.normal} />
            <Button text='+' onClick={addOne} />
          </Flex>
        </CartPriceContent>
      </Flex>
    </CartItemContent>
  );
};

CartItem.propTypes = {
  item: productType.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CartItem;
