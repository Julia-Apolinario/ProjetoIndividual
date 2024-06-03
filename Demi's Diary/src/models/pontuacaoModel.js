var database = require("../database/config")

// function listar() {
//     var instrucao = `
//         SELECT * FROM carro;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function cadastrarNota(fk_usuario,nota) {
    var instrucao = `
        INSERT INTO pontuacao (fk_usuario,nota) VALUES ('${fk_usuario}','${nota}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarNota
    // listar
};

