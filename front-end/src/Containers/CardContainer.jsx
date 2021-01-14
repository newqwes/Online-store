import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card';
import { productType } from '../propType';
import THEME_VARIANT from '../constants/themeVariant';

class CardContainer extends React.Component {
  state = {
    option: this.props.item.options[0],
    optionVariant: 'гр',
  };

  componentDidMount() {
    if (this.props.type === 'drink') this.setState({ optionVariant: 'мл' });
  }

  findByWeight = (weight) => this.props.item.options.find((option) => option.weight === +weight);

  handleChange = (e) => {
    const option = this.findByWeight(e.target.value);
    this.setState({ option });
  };

  render() {
    const { themeVariant, item } = this.props;
    return (
      <Card
        themeVariant={themeVariant}
        price={this.state.option.price}
        optionVariant={this.state.optionVariant}
        item={item}
        handleChange={this.handleChange}
      />
    );
  }
}

CardContainer.propTypes = {
  item: productType.isRequired,
  themeVariant: PropTypes.string,

  type: PropTypes.string.isRequired,
};

CardContainer.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default CardContainer;
