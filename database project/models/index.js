
//const { Sequelize, DataTypes } = require('sequelize');


// const OrderDetails = require('./orderDetails')(sequelize, DataTypes);

// const db = {
//     //sequelize,
//     Sequelize,
//     OrderDetails,
// };

//module.exports = db;

/////
const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('ecommerce', 'root', 'Samzzyluv1$', {
  host: 'localhost',
  dialect: 'mysql'
});

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
// });

// Import Models
const User = require('./user')(sequelize, DataTypes);
const Products = require('./product')(sequelize, DataTypes);
const Orders = require('./order')(sequelize, DataTypes);
const OrderDetails = require('./orderDetails')(sequelize, DataTypes);

// Define Relationships
User.hasMany(Orders, { foreignKey: 'user_id' });
Orders.belongsTo(User, { foreignKey: 'user_id' });

// Orders.belongsToMany(Products, { through: OrderDetails });
// Products.belongsToMany(Orders, { through: OrderDetails });

OrderDetails.belongsTo(Orders, { foreignKey: 'order_id' });
OrderDetails.belongsTo(Products, { foreignKey: 'product_id' });
///
// Orders-Products Association via OrderDetails
Orders.belongsToMany(Products, { 
  through: OrderDetails, 
  foreignKey: 'order_id', // Ensure correct foreign key in the `order_details` table
  otherKey: 'product_id', // Ensure correct foreign key in the `order_details` table
});

Products.belongsToMany(Orders, { 
  through: OrderDetails, 
  foreignKey: 'product_id', 
  otherKey: 'order_id',
});

// Export Models
module.exports = { sequelize, User, Products, Orders, OrderDetails };

// const Sequelize = require('../config/database'); // Adjust this path

// Orders.belongsToMany(Products, { through: OrderDetails });
// Products.belongsToMany(Orders, { through: OrderDetails });

// OrderDetails.belongsTo(Orders, { foreignKey: 'order_id' });
// OrderDetails.belongsTo(Products, { foreignKey: 'product_id' });


// const User = sequelize.define('User', {
//     name: Sequelize.STRING,
//     email: Sequelize.STRING,
//     password: Sequelize.STRING,
// });

// const Product = sequelize.define('Product', {
//     name: Sequelize.STRING,
//     price: Sequelize.FLOAT,
//     category: Sequelize.STRING,
// });

// const Order = sequelize.define('Order', {
//     order_date: Sequelize.DATE,
//     status: Sequelize.STRING,
// });

// const OrderDetail = sequelize.define('OrderDetail', {
//     quantity: Sequelize.INTEGER,
//     price: Sequelize.FLOAT,
// });

// // Relationships
// Order.belongsTo(User, { foreignKey: 'user_id' });
// OrderDetail.belongsTo(Order, { foreignKey: 'order_id' });
// OrderDetail.belongsTo(Product, { foreignKey: 'product_id' });

// // Export models and sequelize instance
// module.exports = {
//     sequelize,
//     User,
//     Product,
//     Order,
//     OrderDetail,
// };
