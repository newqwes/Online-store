import { rules, validation } from '../../utils/validation';

const CONSTRAINTS = {
  minLength: 5,
  maxLength: 40,
};

const commonRules = [
  {
    rule: rules.maxCharacters(CONSTRAINTS.maxLength),
    message: `Не более ${CONSTRAINTS.maxLength} символов`,
  },
  {
    rule: rules.minCharacters(CONSTRAINTS.minLength),
    message: `Не меньше ${CONSTRAINTS.minLength} символов`,
  },
  {
    rule: rules.required,
    message: 'Обязателен для заполнения',
  },
];

export const passwordValidation = validation(commonRules);

export const emailValidation = validation([
  {
    rule: rules.email,
    message: 'Неверный формат email',
  },
  ...commonRules,
]);
