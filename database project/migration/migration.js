module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('order_details', {
        detail_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        order_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Orders',
            key: 'order_id',
          },
          onDelete: 'CASCADE',
        },
        product_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Products',
            key: 'product_id',
          },
          onDelete: 'CASCADE',
        },
        quantity: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('order_details');
    },
  };
  