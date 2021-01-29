import { INPUT_NAME, INPUT_TYPE, INPUT_PLACEHOLDER, INPUT_LABEL } from './input';
import ROUTER_PATH from './routerPath';

const AUTHENTICATION = {
  login: {
    title: 'Авторизация',
    fields: [
      {
        name: INPUT_NAME.email,
        type: INPUT_TYPE.text,
        label: INPUT_LABEL.email,
        placeholder: INPUT_PLACEHOLDER.email,
      },
      {
        name: INPUT_NAME.password,
        type: INPUT_TYPE.password,
        label: INPUT_LABEL.password,
        placeholder: INPUT_PLACEHOLDER.password,
      },
    ],
    buttonText: 'Войти',
    link: { route: ROUTER_PATH.registration, text: 'Регистрация' },
  },
  registration: {
    title: 'Регистрация',
    fields: [
      {
        name: INPUT_NAME.login,
        type: INPUT_TYPE.text,
        label: INPUT_LABEL.login,
        placeholder: INPUT_PLACEHOLDER.login,
      },
      {
        name: INPUT_NAME.email,
        type: INPUT_TYPE.text,
        label: INPUT_LABEL.email,
        placeholder: INPUT_PLACEHOLDER.email,
      },
      {
        name: INPUT_NAME.tel,
        type: INPUT_TYPE.tel,
        label: INPUT_LABEL.tel,
        placeholder: INPUT_PLACEHOLDER.tel,
      },
      {
        name: INPUT_NAME.password,
        type: INPUT_TYPE.password,
        label: INPUT_LABEL.password,
        placeholder: INPUT_PLACEHOLDER.password,
      },
      {
        name: INPUT_NAME.repassword,
        type: INPUT_TYPE.password,
        label: INPUT_LABEL.password,
        placeholder: INPUT_PLACEHOLDER.repassword,
      },
    ],
    buttonText: 'Регистрация',
    link: { route: ROUTER_PATH.login, text: 'Войти' },
  },
};

export default AUTHENTICATION;
