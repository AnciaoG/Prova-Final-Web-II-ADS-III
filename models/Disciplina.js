const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Disciplina = sequelize.define('Disciplina', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    descricao: { type: DataTypes.STRING(100), allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Disciplina;
