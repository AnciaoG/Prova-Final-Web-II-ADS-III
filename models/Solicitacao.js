const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');

const Solicitacao = sequelize.define('Solicitacao', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    data: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: false }
});

// Definição dos relacionamentos
Solicitacao.belongsTo(Aluno, { foreignKey: 'alunos_id' });
Solicitacao.belongsTo(Disciplina, { foreignKey: 'disciplinas_id' });

module.exports = Solicitacao;
