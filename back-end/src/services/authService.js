import bcrypt from 'bcryptjs';

import createResponse from '../utils/createResponse';
import {
  setWithToken,
  setWithPassword,
  createUserData,
  createResponseUserData,
} from '../utils/user';

import userService from './userService';
import User from '../database/models/user';

class AuthService {
  async login({ email, password }) {
    try {
      const foundUser = await userService.findByEmail(email);

      if (!foundUser) {
        return createResponse(401, 'Incorrect email or password!');
      }

      const { password: userPassword } = foundUser;

      const isPasswordEqual = bcrypt.compareSync(password, userPassword);

      if (isPasswordEqual) {
        const responseUserData = createResponseUserData(foundUser);
        const responseUserDataWithToken = setWithToken(responseUserData);

        return createResponse(200, 'Successfully!', responseUserDataWithToken);
      }

      return createResponse(401, 'Incorrect email or password!');
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async create(body) {
    try {
      const { email, password } = body;

      const foundUser = await userService.findByEmail(email);

      if (foundUser) {
        return createResponse(409, 'email already exists!');
      }

      const userData = createUserData(body);
      const userDataWithPassword = setWithPassword(userData, password);

      const user = await User.create(userDataWithPassword);

      const responseUserData = createResponseUserData(user);
      const responseUserDataWithToken = setWithToken(responseUserData);

      return createResponse(201, 'Successfully!', responseUserDataWithToken);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new AuthService();
