module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('product', [
      {
        name: 'Doe manas namesd',
        description: 'description loere',
        photo_url: 'https://sequelize.org/master/manual/migrations.html#installing-the-cli',
      },
    ]),
  down: (queryInterface) => queryInterface.bulkDelete('product', null, {}),
};
