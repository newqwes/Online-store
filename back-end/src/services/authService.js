import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import errorHandler from '../utils/errorHandler';
import User from '../database/models/user';

class AuthService {
  // eslint-disable-next-line class-methods-use-this
  createResult = (status, message, token = {}) => ({ status, message, token });

  async login(body) {
    try {
      const { email, password } = body;

      const candidate = await User.findOne({ where: { email } });

      if (!candidate) {
        return this.createResult(404, 'Not found');
      }

      const user = candidate.toJSON();

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

        return this.createResult(200, 'Token created!', `Bearer ${token}`);
      }
      return this.createResult(401, 'Incorrect login / password pair!');
    } catch (error) {
      return errorHandler(error);
    }
  }

  async create({ email, password }) {
    try {
      const candidate = await User.findOne({ where: { email } });

      if (candidate) {
        return this.createResult(409, 'This email already exists!');
      }

      const salt = bcrypt.genSaltSync();

      const hashPassword = bcrypt.hashSync(password, salt);

      await User.create({ email, password: hashPassword });

      return this.createResult(201, 'User created successfully!');
    } catch (error) {
      return errorHandler(error);
    }
  }
}
export default new AuthService();
