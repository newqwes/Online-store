import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import extractData from '../utils/extractData';
import createResponse from '../utils/createResponse';

import User from '../database/models/user';

class AuthService {
  createUserData = body => {
    const { password } = body;

    const salt = bcrypt.genSaltSync();

    const hashPassword = bcrypt.hashSync(password, salt);

    const userData = {
      ...body,
      password: hashPassword,
      user_type: process.env.USER_ROLE,
    };

    return userData;
  };

  createResponseUserData = userData => {
    const { id, user_type: userType, password, ...other } = extractData(userData);

    const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);

    const responseUserData = {
      ...other,
      userType,
      token: `Bearer ${token}`,
    };

    return responseUserData;
  };

  async findByEmail(email) {
    const foundUser = await User.findOne({ where: { email } });

    if (foundUser) return foundUser.toJSON();
  }

  async login({ email, password }) {
    try {
      const foundUser = await this.findByEmail(email);

      if (!foundUser) {
        return createResponse(401, 'Incorrect email or password!');
      }

      const { password: userPassword } = foundUser;

      const isPasswordEqual = bcrypt.compareSync(password, userPassword);

      if (isPasswordEqual) {
        const responseUserData = this.createResponseUserData(foundUser);

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

      const foundUser = await this.findByEmail(email);

      if (foundUser) {
        return createResponse(409, 'email already exists!');
      }

      const userData = this.createUserData(body);

      const user = await User.create(userData);

      const responseUserData = this.createResponseUserData(user);

      return createResponse(201, 'Successfully!', responseUserData);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new AuthService();
