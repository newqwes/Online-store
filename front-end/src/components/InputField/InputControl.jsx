import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const InputControl = ({ disabled, onEdit, onCancel, onSave }) => {
  if (disabled) {
    return (
      <span onClick={onEdit} className='field-button-edit'>
        Изменить
      </span>
    );
  }

  return (
    <Fragment>
      <span onClick={onSave} className='field-button-save'>
        Сохранить
      </span>
      <span onClick={onCancel} className='field-button-cancel'>
        Отмена
      </span>
    </Fragment>
  );
};

InputControl.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default InputControl;
