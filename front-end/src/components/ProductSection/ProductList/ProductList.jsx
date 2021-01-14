import React from 'react';
import PropTypes from 'prop-types';
import ProductListWrapper from './styled';
import { productsType } from '../../../propType';
import CardContainer from '../../../Containers/CardContainer.jsx';

const ProductList = ({ products, type }) => {
  const mapProducts = products.map((product) => (
    <CardContainer key={product.id} item={product} type={type} />
  ));

  return <ProductListWrapper>{mapProducts}</ProductListWrapper>;
};

ProductList.propTypes = {
  products: productsType.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductList;
