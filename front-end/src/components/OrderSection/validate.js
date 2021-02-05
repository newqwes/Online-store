import { rules, validation } from '../../utils/validation';

const CONSTRAINTS = {
  minLength: 5,
  maxLength: 50,
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

const requiredRule = [
  {
    rule: rules.required,
    message: 'Обязателен для заполнения',
  },
];

export const telValidation = validation(commonRules);

export const cityValidation = validation(requiredRule);
export const homeValidation = validation(requiredRule);
export const streetValidation = validation(requiredRule);
export const apartmentValidation = validation(requiredRule);

export const emailValidation = validation([
  {
    rule: rules.email,
    message: 'Неверный формат email',
  },
  ...commonRules,
]);
