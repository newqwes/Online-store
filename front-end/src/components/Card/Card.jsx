import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper, CardContent } from './styled';

import Image from '../Image';
import Label from '../Label';
import Flex from '../Flex';
import Button from '../Button';

import THEME_VARIANT from '../../constants/themeVariant';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import DIRECTION from '../../constants/direction';
import { productType } from '../../propType';

const Card = ({ item, themeVariant }) => (
  <CardWrapper themeVariant={themeVariant}>
    <Image src={item.image} alt={item.name} />
    <CardContent>
      <Label text={item.name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.lightBold} />
      <Label
        text={item.description}
        fontSize={FONT_SIZE.small}
        fontWeight={FONT_WEIGHT.normal}
        themeVariant={THEME_VARIANT.inverted}
        textAlign={TEXT_ALIGN.center}
      />
      <Flex>
        <Flex direction={DIRECTION.column}>
          <Label
            text={item.price}
            fontSize={FONT_SIZE.least}
            textAlign={TEXT_ALIGN.center}
            fontWeight={FONT_WEIGHT.lightBold}
          />
          <Label
            text={item.weight}
            fontSize={FONT_SIZE.least}
            textAlign={TEXT_ALIGN.center}
            fontWeight={FONT_WEIGHT.lightBold}
          />
        </Flex>
        <Flex>
          <select />
          <Button text='В корзину' />
        </Flex>
      </Flex>
    </CardContent>
  </CardWrapper>
);

Card.propTypes = {
  item: productType.isRequired,
  themeVariant: PropTypes.string,
};

Card.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Card;
