import User from '../database/models/user';

const findByEmail = async email => {
  const foundUser = await User.findOne({ where: { email } });

  if (foundUser) return foundUser.toJSON();
};

export default findByEmail;
