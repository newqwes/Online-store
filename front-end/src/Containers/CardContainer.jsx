import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../components/Card';
import { productType } from '../propType';
import { addToCartAC } from '../actionCreators';
import THEME_VARIANT from '../constants/themeVariant';
import TYPE_QUERY from '../constants/typeQuery';

class CardContainer extends React.Component {
  state = {
    option: this.props.item.options[0],
    optionVariant: TYPE_QUERY.main.optionValue,
  };

  componentDidMount() {
    if (this.props.type === TYPE_QUERY.drink.type) {
      this.setState({ optionVariant: TYPE_QUERY.drink.optionValue });
    }
  }

  findByWeight = (weight) => this.props.item.options.find((option) => option.weight === +weight);

  handleChange = (e) => {
    const option = this.findByWeight(e.target.value);
    this.setState({ option });
  };

  addToCart = () => this.props.addToCartAC(this.props.item);

  render() {
    const { themeVariant, item } = this.props;
    return (
      <Card
        themeVariant={themeVariant}
        price={this.state.option.price}
        optionVariant={this.state.optionVariant}
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
  addToCartAC: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

CardContainer.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

const mapDispatchToProps = {
  addToCartAC,
};

export default connect(null, mapDispatchToProps)(CardContainer);
