import { Strategy, ExtractJwt } from 'passport-jwt';
import knex from 'knex';
import dotenv from 'dotenv';
import config from '../config/knexfile';

dotenv.config();

const dbConfig = config.development;
const users = knex(dbConfig)('user');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

const mwPassport = (passport) => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      try {
        const user = await users.where('id', payload.id);
        if (user !== 0) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (e) {
        console.log(e);
      }
    })
  );
};

export default mwPassport;
