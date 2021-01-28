import { INPUT_NAMES, INPUT_TYPES } from './input';
import ROUTER_PATH from './routerPath';

const AUTHENTICATION = {
  login: {
    label: 'Авторизация',
    fields: [
      { name: INPUT_NAMES.email, type: INPUT_TYPES.text, text: 'Ваша почта' },
      { name: INPUT_NAMES.password, type: INPUT_TYPES.password, text: 'Пароль' },
    ],
    buttonText: 'Войти',
    link: { route: ROUTER_PATH.registration, text: 'Регистрация' },
  },
  registration: {
    label: 'Регистрация',
    fields: [
      { name: INPUT_NAMES.login, type: INPUT_TYPES.text, text: 'Логин' },
      { name: INPUT_NAMES.email, type: INPUT_TYPES.text, text: 'Ваша почта' },
      { name: INPUT_NAMES.tel, type: INPUT_TYPES.tel, text: 'Телефон' },
      { name: INPUT_NAMES.password, type: INPUT_TYPES.password, text: 'Пароль' },
      { name: INPUT_NAMES.repassword, type: INPUT_TYPES.password, text: 'Повторите пароль' },
    ],
    buttonText: 'Регистрация',
    link: { route: ROUTER_PATH.login, text: 'Войти' },
  },
};

export default AUTHENTICATION;
