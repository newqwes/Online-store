import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import getUserId from '../utils/user';
import extractData from '../utils/extractData';
import createResponse from '../utils/createResponse';

import User from '../database/models/user';

class UserService {
  createUserData = body => {
    // eslint-disable-next-line camelcase
    const { password, id, user_type, ...userData } = body;

    if (password) {
      const salt = bcrypt.genSaltSync();

      const hashPassword = bcrypt.hashSync(password, salt);

      const userDataWithPassword = {
        ...userData,
        password: hashPassword,
      };

      return userDataWithPassword;
    }

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

  async getInfo(req) {
    try {
      const id = getUserId(req);

      const user = await User.findOne({
        where: { id },
      });

      const responseUserData = this.createResponseUserData(user);

      return createResponse(200, 'Successfully!', responseUserData);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async update(req) {
    try {
      const { body } = req;

      const id = getUserId(req);

      const userData = this.createUserData(body);

      const { email } = userData;

      if (email) {
        const foundUser = await this.findByEmail(email);

        if (foundUser) {
          return createResponse(409, 'email already exists!');
        }
      }

      const user = await User.update(userData, {
        where: { id },
        returning: true,
        plain: true,
      });

      const responseUserData = this.createResponseUserData(user);

      return createResponse(200, 'Successfully!', responseUserData);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async delete(req) {
    try {
      const id = getUserId(req);

      await User.destroy({ where: { id } });

      return createResponse(200, 'Successfully!', id);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new UserService();
