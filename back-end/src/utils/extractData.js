import { isArray } from 'lodash';

/**
 * Returns the extracted object
 * @param {Object} data - received data from the table using Sequelize
 * @returns {Object}
 */
const extractData = data => {
  if (isArray(data)) {
    const [, dataValues] = data;

    return dataValues.toJSON();
  }

  return data.toJSON();
};

export default extractData;
