import mailer from '../utils/nodemailer';
import orderMessage from '../utils/orderMessage';
import createResponse from '../utils/createResponse';

class OrderService {
  async createOrder({ body }) {
    try {
      mailer(orderMessage(body));

      return createResponse(201, 'Successfully!', body);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new OrderService();
