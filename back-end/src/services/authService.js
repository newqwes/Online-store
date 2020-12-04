import knex from 'knex';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/knexfile';
import errorHandler from '../utils/errorHandler';

const dbConfig = config.development;
const database = knex(dbConfig);

class AuthService {
  constructor(tabelName) {
    this.table = tabelName;
  }

  // eslint-disable-next-line class-methods-use-this
  createResult(status, message, token = '') {
    return { status, message, token };
  }

  async login(body) {
    try {
      const { email, password } = body;
      const candidate = await database(this.table).where('email', email);

      if (candidate.length === 0) {
        return this.createResult(404, 'Not found');
      }

      const user = candidate[0];

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

  async create(body) {
    try {
      const { email, password } = body;

      const candidate = await database(this.table).where('email', email);

      if (candidate.length !== 0) {
        return this.createResult(409, 'This email already exists!');
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);

      await database(this.table).insert({ ...body, password: hashPassword });

      return this.createResult(201, 'User created successfully!');
    } catch (error) {
      return errorHandler(error);
    }
  }
}
export default AuthService;
