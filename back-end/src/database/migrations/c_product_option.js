module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('product_option', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      price: {
        type: DataTypes.FLOAT(6, 2),
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('product_option');
  },
};
