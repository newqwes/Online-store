import orderService from '../services/orderService';

const setOrder = async (req, res) => {
  const result = await orderService.setOrder(req);

  res.status(result.status).json(result);
};

export default setOrder;
