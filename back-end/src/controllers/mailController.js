import mailService from '../services/mailService';

const sendMail = async (req, res) => {
  const result = await mailService.sendMail(req.body);

  res.status(result.status).json(result);
};

export default sendMail;
