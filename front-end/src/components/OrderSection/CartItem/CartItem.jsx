import React from 'react';

import Flex from '../../Flex';
import Label from '../../Label';
import Сurrency from '../../Сurrency';
import {
  CartItemContent,
  CartPhotoContent,
  CartDescriptionContent,
  CartPriceContent,
} from './styled';
import { productType } from '../../../propType';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../../constants/position';
import FONT_SIZE from '../../../constants/fontSize';
import FONT_WEIGHT from '../../../constants/fontWeight';

const CartItem = ({ item: { photoUrl, name, description, options, unitSign, currencySign } }) => (
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
            value={options.weight}
            fontSize={FONT_SIZE.small}
            fontWeight={FONT_WEIGHT.normal}
            postfix={unitSign}
          />
        </Flex>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <Сurrency
            value={options.price}
            fontSize={FONT_SIZE.small}
            fontWeight={FONT_WEIGHT.normal}
            postfix={currencySign}
          />
        </Flex>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
        {/* TODO */}
          <button>-</button>1<button>+</button>
        </Flex>
      </CartPriceContent>
    </Flex>
  </CartItemContent>
);

CartItem.propTypes = {
  item: productType.isRequired,
};

export default CartItem;
