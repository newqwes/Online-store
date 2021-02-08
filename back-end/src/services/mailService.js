import createResponse from '../utils/createResponse';
import mailer from '../utils/nodemailer';
import orderMessage from '../utils/orderMessage';

class MailService {
  async sendMail(body) {
    try {
      mailer(orderMessage(body));

      return createResponse(200, 'Done!', body);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new MailService();
