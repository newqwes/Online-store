import userService from '../services/userService';

export const getUserInfo = async (req, res) => {
  const result = await userService.getInfo(req);

  res.status(result.status).json(result);
};

export const updateUserInfo = async (req, res) => {
  const result = await userService.update(req, req.body);

  res.status(result.status).json(result);
};

export const deleteUser = async (req, res) => {
  const result = await userService.delete(req);

  res.status(result.status).json(result);
};
