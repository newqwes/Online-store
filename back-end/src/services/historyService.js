import getUserId from '../utils/getUserId';

import History from '../database/models/history';
import createResponse from '../utils/createResponse';

class HistoryService {
  async getUserHistory(req) {
    try {
      const userId = getUserId(req);

      const history = await History.findAll({
        where: { user_id: userId },
      });

      return createResponse(200, 'Successfully!', history);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async deleteOneUserHistory(orderId) {
    try {
      const isFound = await History.destroy({ where: { order_id: orderId } });

      if (isFound) return createResponse(200, 'Successfully!');

      return createResponse(404, 'Not found', orderId);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new HistoryService();
