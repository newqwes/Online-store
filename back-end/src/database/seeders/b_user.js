module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('user', [
      {
        login: 'admin',
        password: '$2a$10$cmehrpM2Kbm8dmyqwDdw7eKS4oO.pLX3muI1ToLJSs97lu93l6x5C',
        email: 'newnewqwes@gmail.com',
        tel: '375333637970',
        user_type: 666,
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('user', null, {}),
};
