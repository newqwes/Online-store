import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';
import User from '../database/models/user';
import errorHandler from '../utils/errorHandler';

dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

const mwPassport = (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findOne({ where: { id: payload.id } });

        user ? done(null, user) : done(null, false);
      } catch (error) {
        return errorHandler(error);
      }
    })
  );
};

export default mwPassport;
