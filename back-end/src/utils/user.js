import { getOr } from 'lodash/fp';

/**
 * Returns the user id if authorized else return null
 * @param {Object} req - receive a request from the user
 * @returns {(string|null)}
 */
const getUserId = req => getOr(null, ['user', 'id'], req);

export default getUserId;
