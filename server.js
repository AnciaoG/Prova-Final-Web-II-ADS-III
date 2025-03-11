const express = require('express');
const sequelize = require('./config');
const alunoRoutes = require('./routes/alunoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const solicitacaoRoutes = require('./routes/solicitacaoRoutes');

const app = express();

app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/disciplinas', disciplinaRoutes);
app.use('/solicitacoes', solicitacaoRoutes);

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado!');
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
});
