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

  if (data.dataValues) {
    return data.toJSON();
  }

  return data;
};

export default extractData;
