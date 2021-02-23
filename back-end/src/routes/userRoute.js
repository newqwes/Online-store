import express from 'express';

import checkRole from '../middleware/checkRole';

import { getUserInfo, updateUserInfo, deleteUser } from '../controllers/userController';

const userRoute = express.Router();

const { USER_RULE, ADMIN_RULE } = process.env;

userRoute.get('/', checkRole([USER_RULE, ADMIN_RULE]), getUserInfo);

userRoute.put('/', checkRole([USER_RULE, ADMIN_RULE]), updateUserInfo);

userRoute.delete('/delete/', checkRole([USER_RULE, ADMIN_RULE]), deleteUser);

export default userRoute;
