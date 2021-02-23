import historyService from '../services/historyService';

export const getUserHistory = async (req, res) => {
  const result = await historyService.getUserHistory(req);

  res.status(result.status).json(result);
};

export const deleteOneUserHistory = async (req, res) => {
  const result = await historyService.deleteOneUserHistory(req.params.orderId);

  res.status(result.status).json(result);
};
