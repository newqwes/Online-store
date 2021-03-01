import orderService from '../services/orderService';

export const createOrder = async (req, res) => {
  const result = await orderService.createOrder(req);

  res.status(result.status).json(result);
};

export const getUserOrder = async (req, res) => {
  const result = await orderService.getUserOrder(req);

  res.status(result.status).json(result);
};

export const deleteUserOrder = async (req, res) => {
  const result = await orderService.deleteUserOrder(req.params.orderId);

  res.status(result.status).json(result);
};
