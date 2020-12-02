const express = require('express');
const {
  getAllProducts,
  getByIDProduct,
  createProduct,
} = require('../controllers/productsController');

const productsRoute = express.Router();

productsRoute.get('/', getAllProducts);

productsRoute.get('/:id', getByIDProduct);

productsRoute.post('/', createProduct);

module.exports = productsRoute;
