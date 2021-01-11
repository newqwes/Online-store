import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../../CardItem';
import ItemsStyle from './styled';
import productItemType from '../propTypes/productItemType';

const ProductItems = ({ products }) => {
  const Products = products.map((product) => <CardItem key={product.id} product={product} />);

  return <ItemsStyle>{Products}</ItemsStyle>;
};

ProductItems.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(productItemType)).isRequired,
};

export default ProductItems;
