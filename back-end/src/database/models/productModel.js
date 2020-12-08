import { DataTypes, Model } from 'sequelize';
import sequelize from '..';

class Product extends Model {
  static associate({ Option }) {
    this.hasMany(Option, { foreignKey: 'product_id' });
  }
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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

export default Product;
