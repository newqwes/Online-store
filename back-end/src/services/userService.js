import createResponse from '../utils/createResponse';
import getData from '../utils/getData';
import getUserId from '../utils/getUserId';

import User from '../database/models/user';
import findByEmail from '../utils/findByEmail';

const getProtectedUserParameters = body => {
  // eslint-disable-next-line camelcase
  const { password, id, user_type, ...userParameters } = body;

  return userParameters;
};

class UserService {
  async getInfo(req) {
    try {
      const id = getUserId(req);

      const user = await User.findOne({
        where: { id },
      });

      const userData = getData(user);

      return createResponse(200, 'Successfully!', { ...userData, password: null });
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async update(req) {
    try {
      const { body } = req;

      const id = getUserId(req);

      const userParameters = getProtectedUserParameters(body);

      const { email } = userParameters;

      if (email) {
        const foundUser = await findByEmail(email);

        if (foundUser) {
          return createResponse(409, 'email already exists!');
        }
      }

      const user = await User.update(userParameters, {
        where: { id },
        returning: true,
        plain: true,
      });

      const userData = getData(user);

      return createResponse(200, 'Successfully!', { ...userData, password: null });
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async delete(req) {
    try {
      const id = getUserId(req);

      await User.destroy({ where: { id } });

      return createResponse(200, 'Successfully!');
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new UserService();
