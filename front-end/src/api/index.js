import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:3005/api/',
});

const extractData = (respons) => respons.data.data;

export const productAPI = {
  getProductsList: async (payload) => {
    const respons = await instance.get(`products?type=${payload}`);

    return extractData(respons);
  },
};

export const authAPI = {
  login: async (body) => {
    const respons = await instance.post('auth/login', body);

    return extractData(respons);
  },
  registration: async (body) => {
    const respons = await instance.post('auth/register', body);

    return extractData(respons);
  },
};

export const orderAPI = {
  sendOrder: async (body) => {
    const respons = await instance.post('order', body);

    return extractData(respons);
  },
};
