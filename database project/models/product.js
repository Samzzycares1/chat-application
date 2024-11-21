module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
      product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'Products',
      timestamps: false
    });
  };
  