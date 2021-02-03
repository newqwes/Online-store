import React from 'react';
import find from 'lodash/find';
import PropTypes from 'prop-types';
import { getOr, first, toNumber } from 'lodash/fp';

import { productType } from '../../propType';

import THEME_VARIANT from '../../constants/themeVariant';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';

import Image from '../Image';
import Label from '../Label';
import Flex from '../Flex';
import Select from '../Select';
import Button from '../Button';
import ValueFormater from '../ValueFormater';

import { CardWrapper, CardContent } from './styled';

class Card extends React.Component {
  getOptions = () => getOr([], ['item', 'options'], this.props);

  state = {
    option: first(this.getOptions()),
  };

  findByWeight = (value) => {
    const options = this.getOptions();
    return find(options, ['weight', toNumber(value)]);
  };

  handleChange = ({ target }) => {
    const option = this.findByWeight(target.value);
    this.setState({ option });
  };

  addToCart = () => {
    const { addToCart, item } = this.props;
    const { option } = this.state;

    return addToCart({ ...item, options: option });
  };

  static propTypes = {
    item: productType.isRequired,
    addToCart: PropTypes.func.isRequired,
    themeVariant: PropTypes.string,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  render() {
    const {
      themeVariant,
      item: { photoUrl, name, description, currencySign, options, unitSign },
    } = this.props;
    const { option } = this.state;

    return (
      <CardWrapper themeVariant={themeVariant}>
        <Image src={photoUrl} alt={name} />
        <CardContent>
          <Label text={name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.lightBold} />
          <Label
            text={description}
            fontSize={FONT_SIZE.least}
            fontWeight={FONT_WEIGHT.normal}
            themeVariant={THEME_VARIANT.inverted}
            textAlign={TEXT_ALIGN.center}
          />
          <Flex>
            <ValueFormater
              value={option.price}
              fontSize={FONT_SIZE.least}
              textAlign={TEXT_ALIGN.center}
              fontWeight={FONT_WEIGHT.lightBold}
              postfix={currencySign}
            />
            <Select options={options} onChange={this.handleChange} unitSign={unitSign} />
            <Button text='В корзину' onClick={this.addToCart} />
          </Flex>
        </CardContent>
      </CardWrapper>
    );
  }
}

export default Card;
