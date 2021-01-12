import React from 'react';
import Card from '../../Card';
import ProductListWrapper from './styled';
import productListType from '../propTypes';

const ProductList = ({ data }) => {
  const mapData = data.map((item) => <Card key={item.id} item={item} />);

  return <ProductListWrapper>{mapData}</ProductListWrapper>;
};

ProductList.propTypes = {
  data: productListType.isRequired,
};

export default ProductList;
