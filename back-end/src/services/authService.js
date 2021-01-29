import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createResponse from '../utils/createResponse';
import User from '../database/models/user';

class AuthService {
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

      const { password, email, id, tel, login, user_type: userType } = foundUser.toJSON();

      const passwordResult = bcrypt.compareSync(body.password, password);

      if (passwordResult) {
        const token = jwt.sign({ email, id, user_type: userType }, process.env.ACCESS_TOKEN_SECRET);

        return createResponse(200, 'Successfully!', {
          token: `Bearer ${token}`,
          email,
          tel,
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

      const { email, login, tel, id, user_type: userType } = await User.create({
        ...body,
        user_type: 0,
        password: hashPassword,
      });

      const token = jwt.sign({ email, id, user_type: userType }, process.env.ACCESS_TOKEN_SECRET);

      return createResponse(201, 'Successfully!', {
        token: `Bearer ${token}`,
        email,
        tel,
        login,
        userType,
      });
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}
export default new AuthService();
