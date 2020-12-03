import express from 'express';
import { getAllProducts, getByIDProduct, createProduct } from '../controllers/productsController';

const productsRoute = express.Router();

productsRoute.get('/', getAllProducts);

productsRoute.get('/:id', getByIDProduct);

productsRoute.post('/', createProduct);

export default productsRoute;
