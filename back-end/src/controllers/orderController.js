import orderService from '../services/orderService';

const order = async (req, res) => {
  const result = await orderService.order(req.body);

  res.status(result.status).json(result);
};

export default order;
