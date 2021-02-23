import React from 'react';
import { getOr, noop } from 'lodash/fp';

import fieldInputType from './propTypes';

import THEME_VARIANT from '../../constants/themeVariant';

import ErrorLabel from './ErrorLabel.jsx';
import InputControl from './InputControl.jsx';

class InputField extends React.Component {
  state = {
    disabled: true,
  };

  handleEdit = () => this.setState({ disabled: false });

  handleSave = () => {
    const pristine = getOr(null, ['meta', 'pristine'], this.props);

    if (pristine) return;

    this.props.submit();
    this.setState({ disabled: true });
  };

  handleCancel = () => {
    this.props.reset();
    this.setState({ disabled: true });
  };

  static propTypes = fieldInputType;

  static defaultProps = {
    control: false,
    reset: noop(),
    submit: noop(),
    placeholder: '',
    themeVariant: THEME_VARIANT.default,
  };

  render() {
    const {
      type,
      label,
      control,
      placeholder,
      themeVariant,
      fieldStyle: FieldStyle,
      meta: { touched, error, pristine },
      input: { name, value, onChange, onBlur, onDragStart, onDrop },
    } = this.props;

    const { disabled } = this.state;

    return (
      <FieldStyle
        isError={touched && error}
        themeVariant={themeVariant}
        disabled={disabled}
        pristine={pristine}>
        <label>{label}</label>
        <div className='input-wrapper'>
          <input
            name={name}
            type={type}
            value={value}
            onDrop={onDrop}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            onDragStart={onDragStart}
            disabled={control && disabled}
          />
          {control && (
            <InputControl
              disabled={disabled}
              onEdit={this.handleEdit}
              onSave={this.handleSave}
              onCancel={this.handleCancel}
            />
          )}
        </div>
        {touched && error && <ErrorLabel text={error} />}
      </FieldStyle>
    );
  }
}

export default InputField;
