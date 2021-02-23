import express from 'express';

import checkRole from '../middleware/checkRole';

import setOrder from '../controllers/orderController';

const orderRoute = express.Router();

const { GUEST_RULE, USER_RULE, ADMIN_RULE } = process.env;

orderRoute.post('/', checkRole([GUEST_RULE, USER_RULE, ADMIN_RULE]), setOrder);

export default orderRoute;
