import React from 'react';
import PropTypes from 'prop-types';
import SelectWrapper from './styled';
import THEME_VARIANT from '../../constants/themeVariant';
import { optionsType } from '../../propType';

const Select = ({ options, onChange, units, themeVariant }) => {
  const mapOptions = options.map(({ weight }) => (
    <option key={weight} value={weight}>
      {weight} {units}
    </option>
  ));

  return (
    <SelectWrapper themeVariant={themeVariant} onChange={onChange}>
      {mapOptions}
    </SelectWrapper>
  );
};

Select.propTypes = {
  units: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(optionsType),
  onChange: PropTypes.func,
  themeVariant: PropTypes.string,
};

Select.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Select;
