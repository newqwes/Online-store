import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper, CardContent } from './styled';

import Image from '../Image';
import PriceLabel from '../PriceLabel';
import Label from '../Label';
import Flex from '../Flex';
import Select from '../Select';
import Button from '../Button';

import THEME_VARIANT from '../../constants/themeVariant';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import TYPE_QUERY from '../../constants/typeQuery';
import NOMINALS from '../../constants/NOMINALS';

import { productType } from '../../propType';

class Card extends React.Component {
  state = {
    option: this.props.item.options[0],
    units: TYPE_QUERY.main.optionValue,
  };

  componentDidMount() {
    if (this.props.type === TYPE_QUERY.drink.type) {
      this.setState({ units: TYPE_QUERY.drink.optionValue });
    }
  }

  findByWeight = (weight) =>
    this.props.item.options.find((option) => option.weight === Number.parseFloat(weight));

  handleChange = (e) => {
    const option = this.findByWeight(e.target.value);
    this.setState({ option });
  };

  addToCart = () => this.props.addToCart({ ...this.props.item, options: this.state.option });

  render() {
    const { themeVariant, item } = this.props;
    const { option, units } = this.state;

    return (
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
            <PriceLabel
              price={option.price}
              fontSize={FONT_SIZE.least}
              textAlign={TEXT_ALIGN.center}
              fontWeight={FONT_WEIGHT.lightBold}
              nominal={NOMINALS.BYN}
            />
            <Select options={item.options} onChange={this.handleChange} units={units} />
            <Button text='В корзину' onClick={this.addToCart} />
          </Flex>
        </CardContent>
      </CardWrapper>
    );
  }
}

Card.propTypes = {
  item: productType.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

Card.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Card;
