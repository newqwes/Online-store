import { isArray, get } from 'lodash';

/**
 * Returns the extracted object
 * @param {Object} data - received data from the table using Sequelize
 * @returns {Object}
 */
export const extractDataFromResponseDB = data => {
  if (isArray(data)) {
    const dataValues = get(data, [1, 'dataValues']);

    return dataValues;
  }

  const { dataValues } = data;

  if (dataValues) return dataValues;

  return data;
};

/**
 * Returns the object prepared for writing to the database
 * @param {Array} prevCart - Array of all orders
 * @param {string} userId - user ID
 * @returns {Object}
 */
export const getOrderData = (prevCart, userId) => {
  const date = Date.now();

  const extractCartData = ({
    name,
    description,
    photoUrl,
    unitSign,
    currencySign,
    options: { price, weight },
    count,
  }) => ({
    name,
    description,
    photoUrl,
    unitSign,
    currencySign,
    price,
    weight,
    count,
  });

  const cart = prevCart.map(extractCartData);

  const orderData = { date, user_id: userId, cart };

  return orderData;
};
