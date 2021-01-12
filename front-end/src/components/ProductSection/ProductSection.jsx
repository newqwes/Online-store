import React from 'react';
import PropTypes from 'prop-types';
import { ProductWrapper, ProductContent } from './styled';
import List from '../List';
import PAGE_WIDTH from '../../constants/pageWidth';
import THEME_VARIANT from '../../constants/themeVariant';
import listType from './propTypes/listType';

const ProductSection = ({ pageWidth, themeVariant, products }) => (
  <ProductWrapper themeVariant={themeVariant}>
    <ProductContent pageWidth={pageWidth}>
      <List data={products} />
    </ProductContent>
  </ProductWrapper>
);

ProductSection.propTypes = {
  products: listType.isRequired,
  pageWidth: PropTypes.number,
  themeVariant: PropTypes.string,
};

ProductSection.defaultProps = {
  pageWidth: PAGE_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};

export default ProductSection;
