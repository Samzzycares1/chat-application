// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define('OrderDetails', {
//       detail_id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//       },
//       order_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'Orders',
//           key: 'order_id'
//         }
//       },
//       product_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'Products',
//           key: 'product_id'
//         }
//       },
//       quantity: {
//         type: DataTypes.INTEGER,
//         defaultValue: 1
//       },
//       price: {
//         type: DataTypes.DECIMAL(10, 2)
//       }
//     }, {
//       tableName: 'Order_Details',
//       timestamps: false
//     });
//   };


  

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const OrderDetails = sequelize.define('OrderDetails', {
//   detail_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   order_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   product_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.DECIMAL(10, 2), // Ensure this matches the DB column type
//     allowNull: false,
//   },
// });

// module.exports = OrderDetails;

//////

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class OrderDetails extends Model {}
    OrderDetails.init(
        {
            detail_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'OrderDetails',
            tableName: 'order_details',
            timestamps: false,
        }
    );
    return OrderDetails;
};
