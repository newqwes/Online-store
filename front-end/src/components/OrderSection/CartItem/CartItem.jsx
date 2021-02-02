import React from 'react';
import { getOr, size } from 'lodash/fp';

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

const CartItem = ({ item: { photoUrl, name, description, options, unitSign, currencySign } }) => {
  const price = getOr(0, ['0', 'price'], options);
  const weight = getOr(0, ['0', 'weight'], options);
  const cartItemsCount = size(options);

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
            <Button text='-' />
            <Label
              text={cartItemsCount}
              fontSize={FONT_SIZE.small}
              fontWeight={FONT_WEIGHT.normal}
            />
            <Button text='+' />
          </Flex>
        </CartPriceContent>
      </Flex>
    </CartItemContent>
  );
};

CartItem.propTypes = {
  item: productType.isRequired,
};

export default CartItem;
