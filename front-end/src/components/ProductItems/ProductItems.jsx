import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../CardItem';
import ItemsStyle from './styled';

const ProductItems = ({ products }) => {
  const Products = products.map((product) => <CardItem key={product.id} product={product} />);

  return <ItemsStyle>{Products}</ItemsStyle>;
};

ProductItems.propTypes = {
  products: PropTypes.array,
};

export default ProductItems;
