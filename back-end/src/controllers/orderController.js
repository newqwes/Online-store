import orderService from '../services/orderService';

const createOrder = async (req, res) => {
  const result = await orderService.createOrder(req);

  res.status(result.status).json(result);
};

export default createOrder;
