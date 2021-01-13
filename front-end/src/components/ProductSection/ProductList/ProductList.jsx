import React from 'react';
import Card from '../../Card';
import ProductListWrapper from './styled';
import { productsType } from '../../../propType';

const ProductList = ({ products }) => {
  const mapProducts = products.map((item) => <Card key={item.id} item={item} />);

  return <ProductListWrapper>{mapProducts}</ProductListWrapper>;
};

ProductList.propTypes = {
  products: productsType.isRequired,
};

export default ProductList;
