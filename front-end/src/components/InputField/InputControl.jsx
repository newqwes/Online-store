import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const InputControl = ({ disabled, setEdit, setCancel, setSave }) => {
  if (disabled) {
    return (
      <span onClick={setEdit} className='field-button-edit'>
        Изменить
      </span>
    );
  }

  return (
    <Fragment>
      <span onClick={setSave} className='field-button-save'>
        Сохранить
      </span>
      <span onClick={setCancel} className='field-button-cancel'>
        Отмена
      </span>
    </Fragment>
  );
};

InputControl.propTypes = {
  setEdit: PropTypes.func.isRequired,
  setSave: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  setCancel: PropTypes.func.isRequired,
};

export default InputControl;
