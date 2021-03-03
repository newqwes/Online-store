import Axios from 'axios';
import { getOr } from 'lodash/fp';

const getToken = () => {
  const state = localStorage.getItem('state');
  const token = getOr(null, ['user', 'userData', 'token'], JSON.parse(state));

  return token;
};

const extractData = respons => respons.data.data;

const instance = Axios.create({
  baseURL: 'http://localhost:3005/api/',
});

export const productAPI = {
  getProductsList: async productType => {
    const respons = await instance.get(`products?type=${productType}`);

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
    const respons = await instance.post('order', body, {
      headers: { Authorization: getToken() },
    });

    return extractData(respons);
  },
};

export const userAPI = {
  update: async body => {
    const respons = await instance.put('user', body, {
      headers: { Authorization: getToken() },
    });

    return extractData(respons);
  },
};
