import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const FieldList = ({ fields, component, styledComponent }) => {
  const mapFields = fields.map(({ name, ...other }) => (
    <Field
      key={name}
      component={component}
      {...other}
      name={name}
      styledComponent={styledComponent}
    />
  ));

  return mapFields;
};

FieldList.propTypes = {
  component: PropTypes.elementType.isRequired,
  styledComponent: PropTypes.elementType.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })
  ),
};

export default FieldList;
