const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Обязателен для заполнения';
  } else if (values.email.length < 5) {
    errors.email = 'Не менее 5 символов';
  } else if (values.email.length > 30) {
    errors.email = 'Не более 30 символов';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неверный формат email';
  }

  if (!values.password) {
    errors.password = 'Обязателен для заполнения';
  } else if (values.password.length < 5) {
    errors.password = 'Не менее 5 символов';
  } else if (values.password.length > 30) {
    errors.password = 'Не более 30 символов';
  }
  return errors;
};

export default validate;
