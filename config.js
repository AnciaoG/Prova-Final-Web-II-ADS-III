const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('universidade', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = sequelize;
