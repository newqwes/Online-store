import React from 'react';
import PropTypes from 'prop-types';
import { ProductWrapper, ProductContent } from './styled';
import ProductList from './ProductList';
import SECTION_WIDTH from '../../constants/sectionWidth';
import THEME_VARIANT from '../../constants/themeVariant';
import { productsType } from '../../propType';

const ProductSection = ({ maxSectionWidth, themeVariant, products }) => (
  <ProductWrapper themeVariant={themeVariant}>
    <ProductContent maxSectionWidth={maxSectionWidth}>
      <ProductList data={products} />
    </ProductContent>
  </ProductWrapper>
);

ProductSection.propTypes = {
  products: productsType.isRequired,
  maxSectionWidth: PropTypes.number,
  themeVariant: PropTypes.string,
};

ProductSection.defaultProps = {
  maxSectionWidth: SECTION_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};

export default ProductSection;
