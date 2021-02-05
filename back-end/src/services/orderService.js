import createResponse from '../utils/createResponse';
import mailer from '../utils/nodemailer';
import orderMessage from '../utils/orderMessage';

class OrderService {
  async order(body) {
    try {
      mailer(orderMessage(body));

      return createResponse(200, 'Done!', body);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}
export default new OrderService();
