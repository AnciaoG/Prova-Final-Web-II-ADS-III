const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      allowPublicKeyRetrieval: true
    }
  });

module.exports = sequelize;
