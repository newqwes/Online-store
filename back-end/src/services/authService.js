import bcrypt from 'bcryptjs';

import createResponse from '../utils/createResponse';

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
        const responseUserData = userService.createResponseUserData(foundUser);

        return createResponse(200, 'Successfully!', responseUserData);
      }

      return createResponse(401, 'Incorrect email or password!');
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async create(body) {
    try {
      const { email } = body;

      const foundUser = await userService.findByEmail(email);

      if (foundUser) {
        return createResponse(409, 'email already exists!');
      }

      const userData = userService.createUserData(body);

      const user = await User.create(userData);

      const responseUserData = userService.createResponseUserData(user);

      return createResponse(201, 'Successfully!', responseUserData);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new AuthService();
