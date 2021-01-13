import express from 'express';
import passport from 'passport';
import {
  getProducts,
  getByIDProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController';

const productsRoute = express.Router();

productsRoute.get('/', getProducts);
productsRoute.get('/:id', getByIDProduct);

productsRoute.post('/', passport.authenticate('jwt', { session: false }), createProduct);
productsRoute.put('/:id', passport.authenticate('jwt', { session: false }), updateProduct);
productsRoute.delete('/:id', passport.authenticate('jwt', { session: false }), deleteProduct);

export default productsRoute;
