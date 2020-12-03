import knex from 'knex';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/knexfile';

const dbConfig = config.development;
const database = knex(dbConfig);

class AuthService {
  constructor(tabelName) {
    this.table = tabelName;
  }

  // Make to private
  static createResult(status, message, token = '') {
    return { status, message, token };
  }

  async login(body) {
    try {
      const { email, password } = body;
      const candidate = await database(this.table).where('email', email);

      if (candidate.length === 0) {
        return AuthService.createResult(404, 'Not found');
      }

      const user = candidate[0];

      const passwordResult = bcrypt.compareSync(password, user.password);

      if (passwordResult) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user.id,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: process.env.ACCESS_TOKEN_LIFE }
        );

        return AuthService.createResult(200, 'Token created!', token);
      }
      return AuthService.createResult(401, 'Incorrect login / password pair!');
    } catch (error) {
      return AuthService.createResult(401, 'error');
    }
  }

  async create(body) {
    try {
      const { email, password } = body;

      const candidate = await database(this.table).where('email', email);

      if (candidate.length !== 0) {
        return AuthService.createResult(409, 'This email already exists!');
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);

      await database(this.table).insert({ ...body, password: hashPassword });

      return AuthService.createResult(201, 'User created successfully!');
    } catch (error) {
      return AuthService.createResult(401, 'error');
    }
  }
}
export default AuthService;
