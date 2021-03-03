import Axios from 'axios';
import { getOr } from 'lodash/fp';

const getToken = () => {
  const state = localStorage.getItem('state');
  const token = getOr(null, ['authorization', 'userData', 'token'], JSON.parse(state));

  return token;
};

const instance = Axios.create({
  baseURL: 'http://localhost:3005/api/',
  headers: { Authorization: getToken() },
});

const extractData = respons => respons.data.data;

export const productAPI = {
  getProductsList: async payload => {
    const respons = await instance.get(`products?type=${payload}`);

    return extractData(respons);
  },
};

export const authAPI = {
  login: async body => {
    const respons = await instance.post('auth/login', body);

    return extractData(respons);
  },

  registration: async body => {
    const respons = await instance.post('auth/register', body);

    return extractData(respons);
  },
};

export const orderAPI = {
  sendOrder: async body => {
    const respons = await instance.post('order', body);

    return extractData(respons);
  },
};

export const userAPI = {
  update: async body => {
    const respons = await instance.put('user', body);

    return extractData(respons);
  },
};
