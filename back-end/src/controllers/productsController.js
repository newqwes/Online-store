const config = require('../config/knexfile').development;
// eslint-disable-next-line import/order
const knex = require('knex')(config);

exports.getAllProducts = async (req, res) => {
  try {
    const results = await knex.select().from('products');

    res.status(200).json({
      status: 'success',
      length: results.length,
      date: {
        products: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getOneProducts = async (req, res) => {
  try {
    const results = await knex('products').where('id', req.params.id);

    res.status(200).json({
      status: 'success',
      date: {
        products: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.postOneProducts = async (req, res) => {
  try {
    const results = await knex('products').insert(req.body);
    res.status(201).json({
      status: 'success',
      date: {
        restaurants: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
