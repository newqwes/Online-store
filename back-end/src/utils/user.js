import { getOr } from 'lodash/fp';

/**
 * @param {Object} req - receive a request from the user
 * @returns {string|null} - user id if authorized else return null
 */
const getUserId = req => getOr(null, ['user', 'id'], req);

export default getUserId;
