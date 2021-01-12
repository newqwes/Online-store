import PropTypes from 'prop-types';

const listType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    weight: PropTypes.string,
    image: PropTypes.string,
  })
);

export const listItemType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  weight: PropTypes.string,
  image: PropTypes.string,
});

export default listType;
