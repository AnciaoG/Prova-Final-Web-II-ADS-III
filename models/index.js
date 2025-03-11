const sequelize = require('../config');
const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');
const Solicitacao = require('./Solicitacao');

// Defini relações entre os modelos
Aluno.hasMany(Solicitacao, { foreignKey: 'alunos_id' });
Disciplina.hasMany(Solicitacao, { foreignKey: 'disciplinas_id' });
Solicitacao.belongsTo(Aluno, { foreignKey: 'alunos_id' });
Solicitacao.belongsTo(Disciplina, { foreignKey: 'disciplinas_id' });

// Sincroniza os modelos com o banco de dados
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });  // Use { force: true } para recriar as tabelas do zero
        console.log('Banco de dados sincronizado com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error);
    }
};

// Exportar os modelos e a função de sincronização
module.exports = {
    sequelize,
    Aluno,
    Disciplina,
    Solicitacao,
    syncDatabase
};
