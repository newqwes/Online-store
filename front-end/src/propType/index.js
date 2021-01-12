import PropTypes from 'prop-types';

export const childrenType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element,
  PropTypes.elementType,
  PropTypes.arrayOf(PropTypes.element)
]);

export const productType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  weight: PropTypes.string,
  image: PropTypes.string,
});

export const productsType = PropTypes.arrayOf(productType);
