const { User, Products, Orders, OrderDetails, sequelize } = require('../models');

// Sample function to add data
async function addSampleData() {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');

    // // Sync all models
    // await sequelize.sync({ force: true }); // Use 'force: true' only in development
    // console.log('Models synchronized.');

    // Add a sample user
    const user = await User.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123'
    });

    // async function addSampleData() {
    //   // Logic to add sample data to the database
    //   try {
    //       // Example: Add some sample data to Users table
    //       await User.create({ name: 'Sample User', email: 'sample@example.com', password: 'password123' });
    //       console.log('Sample data added');
    //   } catch (error) {
    //       console.error('Error adding sample data:', error);
    //   }
    // }
    // Add sample products
    const product1 = await Product.create({
      name: 'Laptop',
      price: 999.99,
      category: 'Electronics'
    });

    const product2 = await Product.create({
      name: 'Wireless Mouse',
      price: 29.99,
      category: 'Accessories'
    });

    // Add a sample order for the user
    const order = await Order.create({
      user_id: user.user_id,
      status: 'Shipped'
    });

    // Add products to the order with quantities
    await OrderDetails.create({
      order_id: order.order_id,
      product_id: product1.product_id,
      quantity: 1,
      price: product1.price
    });

    await OrderDetails.create({
      order_id: order.order_id,
      product_id: product2.product_id,
      quantity: 2,
      price: product2.price
    });

    console.log('Sample data added successfully.');
  } catch (error) {
    console.error('Error adding sample data:', error);
  }
}

// Sample function to fetch data
async function fetchData() {
  try {
    await sequelize.authenticate();
    console.log('Fetching data...');
    

    // Fetch all users with their orders and products
    const users = await User.findAll({
      include: [{
        model: Orders,
        include: [{
          model: Products,
          through: {
            attributes: ['quantity', 'price'] // Include data from OrderDetails table
          }
        }]
      }]
    });
////
//
const syncDatabase = async () => {
  try {
      await sequelize.sync({ alter: true }); // Safe schema updates
      console.log("Database synchronized successfully.");
  } catch (error) {
      console.error("Error synchronizing database:", error);
  }
};

// Call the function
syncDatabase();

    console.log('Users with orders and products:');
    users.forEach(user => {
      console.log(`User: ${user.name} (${user.email})`);
      user.Orders.forEach(order => {
        console.log(`  Order ID: ${order.order_id}, Status: ${order.status}`);
        order.Products.forEach(product => {
          console.log(`    Product: ${product.name}`);
          console.log(`    Quantity: ${product.OrderDetails.quantity}`);
          console.log(`    Price: ${product.OrderDetails.price}`);
        });
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//await sequelize.sync({ alter: true }); // Use alter for safe changes

console.log(User.associations);
console.log(Orders.associations);
console.log(Products.associations);

// Export functions
module.exports = { addSampleData, fetchData };
// module.exports = async function fetchData() {
//   // Example operation: Fetch users from a table
//   const users = await User.findAll();
//   console.log(users);
// };

//

// const { OrderDetails } = require('../models');

// async function fetchOrderDetails() {
//     const orderDetails = await OrderDetails.findAll();
//     console.log(orderDetails);
// }

// // module.exports = { fetchOrderDetails };


