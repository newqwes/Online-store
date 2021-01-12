import PropTypes from 'prop-types';

const childrenType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element,
  PropTypes.elementType,
]);

export default childrenType;
