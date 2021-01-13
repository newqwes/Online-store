import express from 'express';
import passport from 'passport';
import {
  getAllProducts,
  getByIDProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController';

const productsRoute = express.Router();

productsRoute.get('/', getAllProducts);
productsRoute.get('/:id', getByIDProduct);

productsRoute.post('/', passport.authenticate('jwt', { session: false }), createProduct);
productsRoute.put('/:id', passport.authenticate('jwt', { session: false }), updateProduct);
productsRoute.delete('/:id', passport.authenticate('jwt', { session: false }), deleteProduct);

export default productsRoute;
