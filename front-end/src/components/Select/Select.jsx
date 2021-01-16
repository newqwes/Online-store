import React from 'react';
import PropTypes from 'prop-types';
import SelectWrapper from './styled';
import THEME_VARIANT from '../../constants/themeVariant';
import { optionsType } from '../../propType';

const Select = ({ options, themeVariant, onChange, units }) => (
  <SelectWrapper themeVariant={themeVariant} onChange={onChange}>
    {options.map((option) => (
      <option key={option.weight} value={option.weight}>
        {option.weight} {units}
      </option>
    ))}
  </SelectWrapper>
);

Select.propTypes = {
  options: PropTypes.arrayOf(optionsType),
  themeVariant: PropTypes.string,
  units: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Select;
