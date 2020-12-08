module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('user', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      login: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('user');
  },
};

// {
//   login: 'admin',
//   password: '$2a$10$cmehrpM2Kbm8dmyqwDdw7eKS4oO.pLX3muI1ToLJSs97lu93l6x5C',
//   email: 'newnewqwes@gmail.com',
//   tel: '375333637970',
//   user_type: 666,
// }
