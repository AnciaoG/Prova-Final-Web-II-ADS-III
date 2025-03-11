const Aluno = require('../models/Aluno');

exports.getAllAlunos = async (req, res) => {
    const alunos = await Aluno.findAll();
    res.json(alunos);
};

exports.createAluno = async (req, res) => {
    const aluno = await Aluno.create(req.body);
    res.json(aluno);
};
