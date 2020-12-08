import { Strategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';
import User from '../database/models/userModel';
import errorHandler from '../utils/errorHandler';

dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

const mwPassport = (passport) => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      try {
        // Change knex => squelize
        const user = await User.where({ id: payload.id }).fetch({ require: false });

        user ? done(null, user) : done(null, false);
      } catch (error) {
        return errorHandler(error);
      }
    })
  );
};

export default mwPassport;
