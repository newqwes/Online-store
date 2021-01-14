import Axios from 'axios';

const instance = Axios.create({
  withCredentials: false,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld25ld3F3ZXNAZ21haWwuY29tIiwiaWQiOjEsInVzZXJfdHlwZSI6NjY2LCJpYXQiOjE2MTA0NjU0MzR9.vvM3t8VJZZLq0hninakk1IiwE8bYlLZzVqMNyRN0Leg',
  },
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
};
