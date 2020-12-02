const express = require('express');
const {
  getAllProducts,
  getOneProducts,
  postOneProducts,
} = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);

productsRouter.get('/:id', getOneProducts);

productsRouter.post('/', postOneProducts);

module.exports = productsRouter;
