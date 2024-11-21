const { User, Product, Order, OrderDetails, sequelize } = require('../models');

// Function to Add a New User
async function createUser(name, email, password) {
  try {
    const user = await User.create({ name, email, password });
    console.log('User created successfully:', user.toJSON());
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Function to Add a New Product
async function createProduct(name, price, category) {
  try {
    const product = await Product.create({ name, price, category });
    console.log('Product created successfully:', product.toJSON());
    return product;
  } catch (error) {
    console.error('Error creating product:', error);
  }
}

// Function to Place an Order
async function createOrder(userId, productDetails) {
  try {
    const transaction = await sequelize.transaction();

    const order = await Order.create(
      { user_id: userId, status: 'Pending' },
      { transaction }
    );

    for (const detail of productDetails) {
      const { productId, quantity, price } = detail;
      await OrderDetails.create(
        {
          order_id: order.order_id,
          product_id: productId,
          quantity,
          price,
        },
        { transaction }
      );
    }

    await transaction.commit();
    console.log('Order placed successfully:', order.toJSON());
    return order;
  } catch (error) {
    console.error('Error placing order:', error);
  }
}

// Function to Update Order Status
async function updateOrderStatus(orderId, status) {
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      console.error('Order not found.');
      return;
    }
    order.status = status;
    await order.save();
    console.log('Order status updated successfully:', order.toJSON());
    return order;
  } catch (error) {
    console.error('Error updating order status:', error);
  }
}

// Function to Delete a User
async function deleteUser(userId) {
  try {
    const result = await User.destroy({ where: { user_id: userId } });
    if (result) {
      console.log(`User with ID ${userId} deleted successfully.`);
    } else {
      console.error(`User with ID ${userId} not found.`);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

// Export Functions
module.exports = {
  createUser,
  createProduct,
  createOrder,
  updateOrderStatus,
  deleteUser,
};
