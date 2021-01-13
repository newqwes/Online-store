module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('product_option', [
      {
        price: 29.99,
        weight: 560,
        product_id: 1,
      },
      {
        price: 26.99,
        weight: 510,
        product_id: 1,
      },
      {
        price: 22.99,
        weight: 440,
        product_id: 1,
      },
      {
        price: 14.99,
        weight: 140,
        product_id: 2,
      },
      {
        price: 15.99,
        weight: 200,
        product_id: 3,
      },
      {
        price: 19.99,
        weight: 290,
        product_id: 3,
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('product_option', null, {}),
};
