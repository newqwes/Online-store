import { map } from 'lodash/fp';
import { v4 as uuidv4 } from 'uuid';

import mailer from '../utils/nodemailer';
import getUserId from '../utils/getUserId';
import orderMessage from '../utils/orderMessage';
import createResponse from '../utils/createResponse';

import History from '../database/models/history';

class OrderService {
  async setOrder(req) {
    try {
      const { body } = req;

      mailer(orderMessage(body));

      const userId = getUserId(req);

      if (userId) {
        const orderId = uuidv4();
        const date = Date.now();

        const parseBody = ({
          name,
          description,
          photoUrl,
          unitSign,
          currencySign,
          count,
          options: { price, weight },
        }) => ({
          name,
          description,
          photoUrl,
          unitSign,
          currencySign,
          count,
          price,
          weight,
          user_id: userId,
          order_id: orderId,
          date,
        });

        const orders = map(parseBody)(body.cart);

        await History.bulkCreate(orders);
      }

      return createResponse(201, 'Successfully!', body);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new OrderService();
