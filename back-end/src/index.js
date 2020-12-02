require('dotenv').config();
const express = require('express');
const productsRoute = require('./routes/productsRoute');

const app = express();

app.use(express.json());

app.use('/api/products', productsRoute);

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
