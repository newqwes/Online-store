module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('product', [
      {
        name: 'Pizza',
        type: 'pizza',
        description: 'description Pizza',
        photo_url: 'https://sequelize.org/Pizza/manual/migrations.html#installing-the-cli',
      },
      {
        name: 'Hotdog',
        type: 'salad',
        description: 'description Hotdog',
        photo_url: 'https://sequelize.org/Hotdog/manual/migrations.html#installing-the-cli',
      },
      {
        name: 'Chicken',
        type: 'chicken',
        description: 'description Chiken',
        photo_url: 'https://sequelize.org/Chiken/manual/migrations.html#installing-the-cli',
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('product', null, {}),
};
