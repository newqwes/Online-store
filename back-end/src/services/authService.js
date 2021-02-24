import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import extractData from '../utils/extractData';
import createResponse from '../utils/createResponse';

import User from '../database/models/user';

export const findByEmail = async email => {
  const foundUser = await User.findOne({ where: { email } });

  if (foundUser) return foundUser.toJSON();
};

class AuthService {
  async login({ email: emailBody, password: passwordBody }) {
    try {
      const foundUser = await findByEmail(emailBody);

      if (!foundUser) {
        return createResponse(401, 'Incorrect email or password!');
      }

      const {
        password: passwordDB,
        id,
        email,
        login,
        phone,
        user_type: userType,
        city,
        street,
        home,
        apartment,
      } = foundUser;

      const isPasswordEqual = bcrypt.compareSync(passwordBody, passwordDB);

      if (isPasswordEqual) {
        const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);

        return createResponse(200, 'Successfully!', {
          id,
          email,
          login,
          phone,
          userType,
          city,
          street,
          home,
          apartment,
          token: `Bearer ${token}`,
        });
      }

      return createResponse(401, 'Incorrect email or password!');
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async create(body) {
    try {
      const { email: emailBody, password: passwordBody } = body;

      const foundUser = await findByEmail(emailBody);

      if (foundUser) {
        return createResponse(409, 'email already exists!');
      }

      const salt = bcrypt.genSaltSync();

      const hashPassword = bcrypt.hashSync(passwordBody, salt);

      const user = await User.create({
        ...body,
        email: emailBody,
        password: hashPassword,
        user_type: process.env.USER_ROLE,
      });

      const {
        id,
        password,
        email,
        login,
        phone,
        user_type: userType,
        city,
        street,
        home,
        apartment,
      } = extractData(user);

      const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);

      return createResponse(201, 'Successfully!', {
        id,
        email,
        login,
        phone,
        userType,
        city,
        street,
        home,
        apartment,
        token: `Bearer ${token}`,
      });
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new AuthService();
