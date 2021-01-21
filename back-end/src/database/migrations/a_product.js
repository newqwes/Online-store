module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('product', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      photoUrl: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      unitSign: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      currencySign: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('product');
  },
};
