import { getOr } from 'lodash/fp';

import User from '../database/models/user';

/**
 * @param {object} req receive a request from the user
 * @returns {string|null} user id if authorized else return null
 */
export const getUserId = req => getOr(null, ['user', 'id'], req);

/**
 * @param {string} email user email
 * @returns {object|undefined} user data if email is found
 */
export const findByEmail = async email => {
  const foundUser = await User.findOne({ where: { email } });

  if (foundUser) return foundUser.toJSON();
};
