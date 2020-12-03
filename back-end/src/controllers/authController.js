import AuthService from '../services/authService';

const authService = new AuthService('user');

export const login = async (req, res) => {
  const result = await authService.login(req.body);

  res.status(result.status).json(result);
};
export const register = async (req, res) => {
  const result = await authService.create(req.body);

  res.status(result.status).json(result);
};
