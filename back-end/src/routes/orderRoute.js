import express from 'express';

import checkRole from '../middleware/checkRole';

import setOrder from '../controllers/orderController';

const orderRoute = express.Router();

const { GUEST_ROLE, USER_ROLE, ADMIN_ROLE } = process.env;

orderRoute.post('/', checkRole([GUEST_ROLE, USER_ROLE, ADMIN_ROLE]), setOrder);

export default orderRoute;
