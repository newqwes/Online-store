import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import productsRoute from './routes/productsRoute';
import authRoute from './routes/authRoute';
import mwPassport from './middleware/passport';
import sequelize from './database';

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(passport.initialize());
mwPassport(passport);

app.use('/api/auth', authRoute);
app.use('/api/products', productsRoute);

const port = process.env.SERVER_PORT;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}...`);
  await sequelize.authenticate();
  console.log('Database Connected!');
});
