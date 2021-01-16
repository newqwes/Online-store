import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper, CardContent } from './styled';

import Image from '../Image';
import Label from '../Label';
import Flex from '../Flex';
import Select from '../Select';
import Button from '../Button';

import THEME_VARIANT from '../../constants/themeVariant';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import { productType } from '../../propType';

const Card = ({ item, themeVariant, price, handleChange, units, addToCart }) => (
  <CardWrapper themeVariant={themeVariant}>
    <Image src={item.photo_url} alt={item.name} />
    <CardContent>
      <Label text={item.name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.lightBold} />
      <Label
        text={item.description}
        fontSize={FONT_SIZE.least}
        fontWeight={FONT_WEIGHT.normal}
        themeVariant={THEME_VARIANT.inverted}
        textAlign={TEXT_ALIGN.center}
      />
      <Flex>
        <Label
          text={`${price}р.`}
          fontSize={FONT_SIZE.least}
          textAlign={TEXT_ALIGN.center}
          fontWeight={FONT_WEIGHT.lightBold}
        />
        <Select options={item.options} onChange={handleChange} units={units} />
        <Button text='В корзину' onClick={addToCart} />
      </Flex>
    </CardContent>
  </CardWrapper>
);

Card.propTypes = {
  item: productType.isRequired,
  price: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
};

Card.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Card;
