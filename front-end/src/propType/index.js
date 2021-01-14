import PropTypes from 'prop-types';

export const childrenType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element,
  PropTypes.elementType,
  PropTypes.arrayOf(PropTypes.element),
]);

export const optionsType = PropTypes.shape({
  id: PropTypes.number,
  price: PropTypes.number,
  weight: PropTypes.number,
  product_id: PropTypes.number,
});

export const productType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  photo_url: PropTypes.string,
  options: PropTypes.arrayOf(optionsType),
});

export const productsType = PropTypes.arrayOf(productType);
