module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Orders', {
      order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id'
        }
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      }
    }, {
      tableName: 'Orders',
      timestamps: false
    });
  };
  