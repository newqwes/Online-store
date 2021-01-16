import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../components/Card';
import { productType } from '../propType';
import { addToCart } from '../actionCreators';
import THEME_VARIANT from '../constants/themeVariant';
import TYPE_QUERY from '../constants/typeQuery';

class CardContainer extends React.Component {
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
      <Card
        themeVariant={themeVariant}
        price={option.price}
        units={units}
        item={item}
        handleChange={this.handleChange}
        addToCart={this.addToCart}
      />
    );
  }
}

CardContainer.propTypes = {
  item: productType.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

CardContainer.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(CardContainer);
