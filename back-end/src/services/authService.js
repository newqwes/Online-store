import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import getData from '../utils/getData';
import findByEmail from '../utils/findByEmail';
import createResponse from '../utils/createResponse';

import User from '../database/models/user';

class AuthService {
  async login({ email, password: passwordBody }) {
    try {
      const foundUser = await findByEmail(email);

      if (!foundUser) {
        return createResponse(401, 'Incorrect email or password!');
      }

      const { password: passwordDB, id, ...other } = foundUser;

      const isPasswordEqual = bcrypt.compareSync(passwordBody, passwordDB);

      if (isPasswordEqual) {
        const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);

        return createResponse(200, 'Successfully!', {
          token: `Bearer ${token}`,
          id,
          ...other,
        });
      }

      return createResponse(401, 'Incorrect email or password!');
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async create(body) {
    try {
      const { email, password } = body;

      const foundUser = await findByEmail(email);

      if (foundUser) {
        return createResponse(409, 'email already exists!');
      }

      const salt = bcrypt.genSaltSync();

      const hashPassword = bcrypt.hashSync(password, salt);

      const user = await User.create({
        ...body,
        user_type: process.env.USER_RULE,
        password: hashPassword,
      });

      const { id, ...userData } = getData(user);

      const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);

      return createResponse(201, 'Successfully!', {
        ...userData,
        id,
        password: null,
        token: `Bearer ${token}`,
      });
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}
export default new AuthService();
