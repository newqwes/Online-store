import express from 'express';

import sendMail from '../controllers/mailController';

const mailRoute = express.Router();

mailRoute.post('/', sendMail);

export default mailRoute;
