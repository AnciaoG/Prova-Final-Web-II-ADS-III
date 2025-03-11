const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Aluno = sequelize.define('Aluno', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    matricula: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    nome: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    status: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Aluno;
