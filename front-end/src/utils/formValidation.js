export const requiredValidation = ({ messege }) => (value) => {
  if (!value) return messege;
};

export const lengthValidation = ({ length, messege, toMore }) => (value) => {
  if (value && (toMore ? value.length > length : value.length < length)) return messege;
};

export const emailValidation = ({ messege }) => (value) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return messege;
  }
};
