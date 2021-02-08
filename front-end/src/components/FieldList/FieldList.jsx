import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import fieldsType from './propTypes';

const FieldList = ({ fields, component, styledComponent }) => {
  const fieldList = fields.map(({ name, ...other }) => (
    <Field
      key={name}
      component={component}
      {...other}
      name={name}
      styledComponent={styledComponent}
    />
  ));

  return fieldList;
};

FieldList.propTypes = {
  component: PropTypes.elementType.isRequired,
  styledComponent: PropTypes.elementType.isRequired,
  fields: PropTypes.arrayOf(fieldsType),
};

export default FieldList;
