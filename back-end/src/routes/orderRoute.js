import express from 'express';

import checkRole from '../middleware/checkRole';

import { createOrder, getUserOrder, deleteUserOrder } from '../controllers/orderController';

const orderRoute = express.Router();

const { GUEST_ROLE, USER_ROLE, ADMIN_ROLE } = process.env;

orderRoute.post('/', checkRole([GUEST_ROLE, USER_ROLE, ADMIN_ROLE]), createOrder);

orderRoute.get('/', checkRole([USER_ROLE, ADMIN_ROLE]), getUserOrder);

orderRoute.delete('/delete/:orderId', checkRole([ADMIN_ROLE]), deleteUserOrder);

export default orderRoute;
