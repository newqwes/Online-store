import React from 'react';
import PropTypes from 'prop-types';
import ProductListWrapper from './styled';
import { productsType } from '../../../propType';
import Card from '../../Card';

const ProductList = ({ products, type, addToCart }) => {
  const mapProducts = products.map((product) => (
    <Card addToCart={addToCart} key={product.id} item={product} type={type} />
  ));

  return <ProductListWrapper>{mapProducts}</ProductListWrapper>;
};

ProductList.propTypes = {
  products: productsType.isRequired,
  type: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
