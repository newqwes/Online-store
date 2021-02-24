import { isArray } from 'lodash';

/**
 * @param {Object} data - received data from the table using Sequelize
 * @returns {Object} - comfortable object data.toJSON()
 */
const extractData = data => {
  if (isArray(data)) {
    const [, dataValues] = data;

    return dataValues.toJSON();
  }

  return data.toJSON();
};

export default extractData;
