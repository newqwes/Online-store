import { getUserId } from '../utils/user';
import mailer from '../utils/nodemailer';
import orderMessage from '../utils/orderMessage';
import createResponse from '../utils/createResponse';
import { getOrderData } from '../utils/extractData';

import Cart from '../database/models/cart';
import Order from '../database/models/order';

class OrderService {
  async createOrder(req) {
    try {
      const { body } = req;

      const userId = getUserId(req);

      if (userId) {
        const { cart } = body;
        const orderData = getOrderData(cart, userId);

        await Order.create(orderData, {
          include: { model: Cart, as: 'cart' },
        });
      }

      mailer(orderMessage(body));

      return createResponse(201, 'Successfully!', body);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async getUserOrder(req) {
    try {
      const userId = getUserId(req);

      const orders = await Order.findAll({
        where: { user_id: userId },
        include: { model: Cart, as: 'cart' },
      });

      return createResponse(200, 'Successfully!', orders);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async deleteUserOrder(orderId) {
    try {
      const isFound = await Order.destroy({ where: { order_id: orderId } });

      if (isFound) return createResponse(200, 'Successfully!', orderId);

      return createResponse(404, 'Not found', orderId);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new OrderService();
