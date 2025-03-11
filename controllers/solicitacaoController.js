const Solicitacao = require('../models/Solicitacao');

exports.getAllSolicitacoes = async (req, res) => {
    const solicitacoes = await Solicitacao.findAll();
    res.json(solicitacoes);
};

exports.createSolicitacao = async (req, res) => {
    const solicitacao = await Solicitacao.create(req.body);
    res.json(solicitacao);
};
