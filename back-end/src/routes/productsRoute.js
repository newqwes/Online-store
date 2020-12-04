import express from 'express';
import passport from 'passport';
import { getAllProducts, getByIDProduct, createProduct } from '../controllers/productsController';

const productsRoute = express.Router();

productsRoute.get('/', getAllProducts);
productsRoute.get('/:id', getByIDProduct);
productsRoute.post('/', passport.authenticate('jwt', { session: false }), createProduct);

export default productsRoute;
