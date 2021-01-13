import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createResponse from '../utils/createResponse';
import User from '../database/models/user';

class AuthService {
  findByEmail = async (email) => {
    const foundUser = await User.findOne({ where: { email } });

    return foundUser;
  };

  async login({ email, password }) {
    try {
      const foundUser = await this.findByEmail(email);

      if (!foundUser) {
        return createResponse(404, 'Not found');
      }

      const user = foundUser.toJSON();

      const passwordResult = bcrypt.compareSync(password, user.password);

      if (passwordResult) {
        const token = jwt.sign(
          {
            email: user.email,
            id: user.id,
            user_type: user.user_type,
          },
          process.env.ACCESS_TOKEN_SECRET
        );

        return createResponse(200, 'Successfully!', `Bearer ${token}`);
      }
      return createResponse(401, 'Incorrect login or password!');
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async create({ email, password }) {
    try {
      const foundUser = await this.findByEmail(email);

      if (foundUser) {
        return createResponse(409, 'Already exists!');
      }

      const salt = bcrypt.genSaltSync();

      const hashPassword = bcrypt.hashSync(password, salt);

      await User.create({ email, password: hashPassword });

      return createResponse(201, 'Successfully!');
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}
export default new AuthService();
