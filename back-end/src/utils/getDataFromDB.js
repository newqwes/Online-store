import { isArray } from 'lodash';

/**
 * @param {object} data received data from the table using Sequelize
 * @returns {object} comfortable object data.toJSON()
 */
const getDataFromDB = data => {
  if (isArray(data)) {
    const [, dataValues] = data;

    return dataValues.toJSON();
  }

  return data.toJSON();
};

export default getDataFromDB;
