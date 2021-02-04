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
  photoUrl: PropTypes.string,
  unitSign: PropTypes.string,
  currencySign: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.arrayOf(optionsType), optionsType]),
});

export const productsType = PropTypes.arrayOf(productType);

export const cartItemType = productType;

export const cartType = PropTypes.arrayOf(productType);

export const locationRouterType = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  key: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  state: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
});
