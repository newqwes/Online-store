import express from 'express';

import checkRole from '../middleware/checkRole';

import {
  getProducts,
  getByIDProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController';

const { GUEST_RULE, USER_RULE, ADMIN_RULE } = process.env;

const productsRoute = express.Router();

productsRoute.get('/', checkRole([USER_RULE, ADMIN_RULE, GUEST_RULE]), getProducts);

productsRoute.get('/:id', checkRole([USER_RULE, ADMIN_RULE, GUEST_RULE]), getByIDProduct);

productsRoute.post('/', checkRole([ADMIN_RULE]), createProduct);

productsRoute.put('/:id', checkRole([ADMIN_RULE]), updateProduct);

productsRoute.delete('/:id', checkRole([ADMIN_RULE]), deleteProduct);

export default productsRoute;
