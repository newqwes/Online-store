import { DataTypes, Model } from 'sequelize';
import sequelize from '..';

class Option extends Model {
  static associate({ Product }) {
    this.belongsTo(Product, { foreignKey: 'product_id' });
  }
}

Option.init(
  {
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
  },
  {
    sequelize,
    tableName: 'product_option',
    timestamps: false,
  }
);

export default Option;
