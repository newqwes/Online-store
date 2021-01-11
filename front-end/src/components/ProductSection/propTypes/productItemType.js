import PropTypes from 'prop-types';

const productItemType = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  weight: PropTypes.string,
  image: PropTypes.string,
};

export default productItemType;
