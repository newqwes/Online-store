import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';
import productsRoute from './routes/productsRoute';
import authRoute from './routes/authRoute';
import mwPassport from './middleware/passport';

dotenv.config();
const app = express();

app.use(express.json());

app.use(passport.initialize());
mwPassport(passport);

app.use('/api/auth', authRoute);
app.use('/api/products', productsRoute);

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}...`);
});
