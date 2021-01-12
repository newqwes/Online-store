import PropTypes from 'prop-types';

export const listItemType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  weight: PropTypes.string,
  image: PropTypes.string,
});

const listType = PropTypes.arrayOf(listItemType);

export default listType;
