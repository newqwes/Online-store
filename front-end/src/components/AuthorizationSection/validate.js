import { rules, validation } from '../../utils/validation';

const CONSTRAINTS = {
  min: 5,
  max: 40,
};

const commonRules = [
  {
    rule: rules.maxCharacters(CONSTRAINTS.max),
    message: `Не более ${CONSTRAINTS.max} символов`,
  },
  {
    rule: rules.minCharacters(CONSTRAINTS.min),
    message: `Не меньше ${CONSTRAINTS.min} символов`,
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
