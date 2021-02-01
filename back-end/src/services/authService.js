import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createResponse from '../utils/createResponse';
import User from '../database/models/user';

class AuthService {
  USER_RULES = {
    user: 0,
    admin: 666,
  };

  findByEmail = async (email) => {
    const foundUser = await User.findOne({ where: { email } });

    return foundUser;
  };

  async login(body) {
    try {
      const foundUser = await this.findByEmail(body.email);

      if (!foundUser) {
        return createResponse(404, 'Not found');
      }

      const { password, email, id, phone, login, user_type: userType } = foundUser.toJSON();

      const isPasswordEqual = bcrypt.compareSync(body.password, password);

      if (isPasswordEqual) {
        const token = jwt.sign({ email, id, user_type: userType }, process.env.ACCESS_TOKEN_SECRET);

        return createResponse(200, 'Successfully!', {
          token: `Bearer ${token}`,
          email,
          phone,
          login,
          userType,
        });
      }
      return createResponse(401, 'Incorrect login or password!');
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async create(body) {
    try {
      const foundUser = await this.findByEmail(body.email);

      if (foundUser) {
        return createResponse(409, 'Already exists!');
      }

      const salt = bcrypt.genSaltSync();

      const hashPassword = bcrypt.hashSync(body.password, salt);

      const { email, login, phone, id, user_type: userType } = await User.create({
        ...body,
        user_type: this.USER_RULES.user,
        password: hashPassword,
      });

      const token = jwt.sign({ email, id, user_type: userType }, process.env.ACCESS_TOKEN_SECRET);

      return createResponse(201, 'Successfully!', {
        token: `Bearer ${token}`,
        email,
        phone,
        login,
        userType,
      });
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}
export default new AuthService();
