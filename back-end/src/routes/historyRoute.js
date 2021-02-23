import express from 'express';

import checkRole from '../middleware/checkRole';

import { getUserHistory, deleteOneUserHistory } from '../controllers/historyController';

const historyRoute = express.Router();

const { USER_RULE, ADMIN_RULE } = process.env;

historyRoute.get('/', checkRole([USER_RULE, ADMIN_RULE]), getUserHistory);

historyRoute.delete('/delete/:orderId', checkRole([ADMIN_RULE]), deleteOneUserHistory);

export default historyRoute;
