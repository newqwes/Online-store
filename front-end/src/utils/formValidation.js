export const requiredField = (value) => {
  if (!value) return 'Объязателен для заполнения';
};

export const maxLength = (max) => (value) => {
  if (value && value.length > max) return `Не более ${max} символов`;
};

export const minLength = (min) => (value) => {
  if (value && value.length < min) return `Не менее ${min} символов`;
};
export const emailValidate = (value) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Неправельный email адрес';
  }
};
