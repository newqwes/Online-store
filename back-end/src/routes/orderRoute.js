import express from 'express';

import order from '../controllers/orderController';

const orderRoute = express.Router();

orderRoute.post('/', order);

export default orderRoute;
