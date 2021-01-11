import React from 'react';
import PropTypes from 'prop-types';

import CardStyle, { shareStylesButton } from './styled';

import Image from '../Image';
import CardProperties from './CardProperties';
import Label from '../Label';
import Alignment from '../Alignment';
import Button from '../Button';

import THEME_VARIANT from '../../constants/themeVariant';
import RADIUS from '../../constants/radius';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import DIRECTION from '../../constants/direction';
import INDENT from '../../constants/indent';
import QUANTITY_COLUMN from '../../constants/quantityСolumn';
import productItemType from '../ProductSection/propTypes/productItemType';

const CardItem = ({ product, themeVariant, radius, indent, quantityСolumn }) => (
  <CardStyle
    themeVariant={themeVariant}
    radius={radius}
    indent={indent}
    quantityСolumn={quantityСolumn}
  >
    <Image src={product.image} alt={product.name} />
    <CardProperties>
      <Label text={product.name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.lightBold} />
      <Label
        text={product.description}
        fontSize={FONT_SIZE.verySmall}
        fontWeight={FONT_WEIGHT.normal}
        themeVariant={THEME_VARIANT.inverted}
        textAlign={TEXT_ALIGN.center}
      />
      <Alignment>
        <Alignment direction={DIRECTION.column}>
          <Label
            text={product.price}
            fontSize={FONT_SIZE.least}
            textAlign={TEXT_ALIGN.center}
            fontWeight={FONT_WEIGHT.lightBold}
          />
          <Label
            text={product.weight}
            fontSize={FONT_SIZE.least}
            textAlign={TEXT_ALIGN.center}
            fontWeight={FONT_WEIGHT.lightBold}
          />
        </Alignment>
        <Alignment>
          <select />
          <Button text='В корзину' shareStyles={shareStylesButton} />
        </Alignment>
      </Alignment>
    </CardProperties>
  </CardStyle>
);

CardItem.propTypes = {
  product: PropTypes.shape(productItemType).isRequired,
  themeVariant: PropTypes.string,
  radius: PropTypes.number,
  indent: PropTypes.number,
  quantityСolumn: PropTypes.number,
};

CardItem.defaultProps = {
  themeVariant: THEME_VARIANT.default,
  radius: RADIUS.default,
  indent: INDENT.default,
  quantityСolumn: QUANTITY_COLUMN.default,
};

export default CardItem;
