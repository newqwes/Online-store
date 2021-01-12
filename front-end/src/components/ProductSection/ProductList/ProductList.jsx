import React from 'react';
import Card from '../../Card';
import ProductListWrapper from './styled';
import { productsType } from '../../../propType';

const ProductList = ({ data }) => {
  const mapData = data.map((item) => <Card key={item.id} item={item} />);

  return <ProductListWrapper>{mapData}</ProductListWrapper>;
};

ProductList.propTypes = {
  data: productsType.isRequired,
};

export default ProductList;
