const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('universidade', 'root', 'senha123', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = sequelize;
