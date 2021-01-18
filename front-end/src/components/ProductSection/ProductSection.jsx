import React from 'react';
import PropTypes from 'prop-types';

import SECTION_WIDTH from '../../constants/sectionWidth';
import THEME_VARIANT from '../../constants/themeVariant';

import { ProductWrapper, ProductContent } from './styled';

import ProductList from './ProductList';

import { productsType, locationRouterType } from '../../propType';

class ProductSection extends React.Component {
  state = {
    type: '',
  };

  setQueryTypeToState = () => {
    const { search } = this.props.location;
    const type = new URLSearchParams(search).get('type');

    this.setState({ type });

    this.props.getProductsList(type);
  };

  componentDidMount() {
    this.setQueryTypeToState();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setQueryTypeToState();
    }
  }

  render() {
    const { products, themeVariant, maxSectionWidth, addToCart } = this.props;
    const { type } = this.state;

    return (
      <ProductWrapper themeVariant={themeVariant}>
        <ProductContent maxSectionWidth={maxSectionWidth}>
          <ProductList products={products} type={type} addToCart={addToCart} />
        </ProductContent>
      </ProductWrapper>
    );
  }
}

ProductSection.propTypes = {
  products: productsType.isRequired,
  maxSectionWidth: PropTypes.number,
  themeVariant: PropTypes.string,
  getProductsList: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  location: locationRouterType.isRequired,
};

ProductSection.defaultProps = {
  maxSectionWidth: SECTION_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};

export default ProductSection;
