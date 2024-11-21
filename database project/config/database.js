// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'Samzzyluv1$', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
