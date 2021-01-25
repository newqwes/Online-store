import VALIDATION_LENGTH from '../../../constants/validationLength';
import { rules, validation } from '../../../utils/validation';

const commonRules = [
  {
    rule: rules.maxCharacters(VALIDATION_LENGTH.max),
    message: `Не более ${VALIDATION_LENGTH.max} символов`,
  },
  {
    rule: rules.minCharacters(VALIDATION_LENGTH.min),
    message: `Не меньше ${VALIDATION_LENGTH.min} символов`,
  },
  {
    rule: rules.required,
    message: 'Обязателен для заполнения',
  },
];

const passwordValidation = validation(commonRules);

const emailValidation = validation([
  {
    rule: rules.email,
    message: 'Неверный формат email',
  },
  ...commonRules,
]);

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

export default validate;
