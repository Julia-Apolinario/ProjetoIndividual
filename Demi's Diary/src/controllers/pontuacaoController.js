
var pontuacaoModel = require("../models/pontuacaoModel");


// function listar(req, res) {
//     carroModel.listar().then(function(resultado){
//         // precisamos informar que o resultado voltará para o front-end como uma resposta em json
//         res.status(200).json(resultado);
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
//}

function cadastrarNota(req, res) {
    var nota = req.body.nota;
    

    if (nota == undefined) {
        res.status(400).send("Sua nota está undefined!");
    }

    pontuacaoModel.cadastrarNota(nota).then(function(resposta){
        res.status(200).send("Nota registrada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
   // listar,
    cadastrarNota
}