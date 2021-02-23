import express from 'express';

import checkRole from '../middleware/checkRole';

import { login, register } from '../controllers/authController';

const authRoute = express.Router();

const { GUEST_RULE, USER_RULE, ADMIN_RULE } = process.env;

authRoute.post('/login', checkRole([USER_RULE, ADMIN_RULE, GUEST_RULE]), login);

authRoute.post('/register', checkRole([USER_RULE, ADMIN_RULE, GUEST_RULE]), register);

export default authRoute;
