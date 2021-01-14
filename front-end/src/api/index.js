import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:3005/api/',
});

const extractData = (respons) => respons.data.data;

const productAPI = {
  getProductsList: async (payload) => {
    const respons = await instance.get(`products?type=${payload}`);

    return extractData(respons);
  },
};

export default productAPI;
