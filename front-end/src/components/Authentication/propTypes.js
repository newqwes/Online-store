import PropTypes from 'prop-types';

const contentType = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,

  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }),

  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })
  ),
};

export default contentType;
