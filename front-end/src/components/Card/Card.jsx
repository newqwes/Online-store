import React from 'react';
import { getOr, isEqual } from 'lodash/fp';
import PropTypes from 'prop-types';

import { CardWrapper, CardContent } from './styled';

import Image from '../Image';
import Сurrency from '../Сurrency';
import Label from '../Label';
import Flex from '../Flex';
import Select from '../Select';
import Button from '../Button';

import THEME_VARIANT from '../../constants/themeVariant';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import TYPE_QUERY from '../../constants/typeQuery';
import SIGNS from '../../constants/signs';

import { productType } from '../../propType';

class Card extends React.Component {
  state = {
    option: getOr({}, ['options', '0'], this.props.item),
    units: TYPE_QUERY.main.optionValue,
  };

  componentDidMount() {
    const { type, optionValue } = TYPE_QUERY.drink;

    if (isEqual(this.props.type, type)) {
      this.setState({ units: optionValue });
    }
  }

  findByWeight = (value) => {
    const { item } = this.props;

    const options = getOr([], 'options', item);

    return options.find(({ weight }) => isEqual(weight, Number.parseFloat(value)));
  };

  handleChange = ({ target }) => {
    const option = this.findByWeight(target.value);
    this.setState({ option });
  };

  addToCart = () => {
    const { addToCart, item } = this.props;
    const { option } = this.state;

    const id = getOr(0, 'id', item);
    const type = getOr('', 'type', item);
    const name = getOr('', 'name', item);

    return addToCart({ id, name, type, option });
  };

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
            <Сurrency
              value={option.price}
              fontSize={FONT_SIZE.least}
              textAlign={TEXT_ALIGN.center}
              fontWeight={FONT_WEIGHT.lightBold}
              postfix={SIGNS.BYN}
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
  addToCart: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  themeVariant: PropTypes.string,
};

Card.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Card;
