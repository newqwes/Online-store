import React from 'react';
import PropTypes from 'prop-types';
import CardStyle from './styled';
import Image from '../Image';
import CardProperties from '../CardProperties';
import Label from '../Label';
import Alignment from '../Alignment';
import Button from '../Button';

const CardItem = ({ product }) => (
  <CardStyle>
    <Image src={product.image} alt={product.name} />
    <CardProperties>
      <Label text={product.name} fontSize={2.2} weight='500' />
      <Label text={product.description} fontSize={1.4} color='light' align='center' weight='400' />
      <Alignment gap={0}>
        <Alignment direction='column'>
          <Label text={product.price} fontSize={1.2} color='primary' align='center' weight='500' />
          <Label text={product.weight} fontSize={1.2} color='primary' align='center' weight='500' />
        </Alignment>
        <Alignment>
          <select name='dimensions'>
            <option value='22'>22</option>
            <option value='30'>30</option>
            <option value='36'>36</option>
          </select>
          <Button
            text='В корзину'
            padding={0.5}
            weight='500'
            spacing='0.01'
            size={1.3}
            color='cart'
          />
        </Alignment>
      </Alignment>
    </CardProperties>
  </CardStyle>
);

CardItem.propTypes = {
  product: PropTypes.object,
};

export default CardItem;
