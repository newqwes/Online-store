import express from 'express';

import checkRole from '../middleware/checkRole';

import { getUserInfo, updateUserInfo, deleteUser } from '../controllers/userController';

const userRoute = express.Router();

const { USER_ROLE, ADMIN_ROLE } = process.env;

userRoute.get('/', checkRole([USER_ROLE, ADMIN_ROLE]), getUserInfo);

userRoute.put('/', checkRole([USER_ROLE, ADMIN_ROLE]), updateUserInfo);

userRoute.delete('/delete/', checkRole([USER_ROLE, ADMIN_ROLE]), deleteUser);

export default userRoute;
