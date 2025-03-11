const Disciplina = require('../models/Disciplina');

exports.getAllDisciplinas = async (req, res) => {
    const disciplinas = await Disciplina.findAll();
    res.json(disciplinas);
};

exports.createDisciplina = async (req, res) => {
    const disciplina = await Disciplina.create(req.body);
    res.json(disciplina);
};
