import dotenv from 'dotenv';
import express from 'express';
import productsRoute from './routes/productsRoute';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/products', productsRoute);

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
