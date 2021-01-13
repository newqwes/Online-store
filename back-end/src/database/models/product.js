import { DataTypes, Model } from 'sequelize';
import sequelize from '..';
import Option from './option';

class Product extends Model {}

Product.init(
  {
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
    photo_url: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'product',
    timestamps: false,
  }
);

Option.belongsTo(Product, { foreignKey: 'id' });

Product.hasMany(Option, { foreignKey: 'product_id', as: 'options' });

export default Product;
