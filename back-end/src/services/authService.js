import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import errorHandler from '../utils/errorHandler';
import createResponse from '../utils/createResponse';
import User from '../database/models/user';

class AuthService {
  findByEmail = async (email) => {
    const foundUser = await User.findOne({ where: { email } });

    return foundUser;
  };

  async login({ email, password }) {
    try {
      const foundUser = this.findByEmail(email);

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

        return createResponse(200, 'Token created!', `Bearer ${token}`);
      }
      return createResponse(401, 'Incorrect login / password pair!');
    } catch (error) {
      return errorHandler(500, error);
    }
  }

  async create({ email, password }) {
    try {
      const foundUser = this.findByEmail(email);

      if (foundUser) {
        return createResponse(409, 'This email already exists!');
      }

      const salt = bcrypt.genSaltSync();

      const hashPassword = bcrypt.hashSync(password, salt);

      await User.create({ email, password: hashPassword });

      return createResponse(201, 'User created successfully!');
    } catch (error) {
      return errorHandler(500, error);
    }
  }
}
export default new AuthService();
