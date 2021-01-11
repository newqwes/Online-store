import React from 'react';
import PropTypes from 'prop-types';
import { ProductWrapper, ProductContent } from './styled';
import ProductItems from './ProductItems';
import PAGE_WIDTH from '../../constants/pageWidth';
import THEME_VARIANT from '../../constants/themeVariant';
import productItemType from './propTypes/productItemType';

const ProductSection = ({ pageWidth, themeVariant, products }) => (
  <ProductWrapper themeVariant={themeVariant}>
    <ProductContent pageWidth={pageWidth}>
      <ProductItems products={products} />
    </ProductContent>
  </ProductWrapper>
);

ProductSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(productItemType)).isRequired,
  pageWidth: PropTypes.number,
  themeVariant: PropTypes.string,
};

ProductSection.defaultProps = {
  pageWidth: PAGE_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};

export default ProductSection;
