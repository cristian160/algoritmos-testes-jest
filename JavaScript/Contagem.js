const { validarInteiro, validarLista } = require("./validacao");

function contar(dados, limiteSuperior) {
    validarInteiro(limiteSuperior, "O limite superior");
    validarLista(dados);
    const limiteInferior = dados[0];
    let quantidade = 0;
    for (const valor of dados) {
        validarInteiro(valor, "Cada elemento");
        if (valor >= limiteInferior && valor <= limiteSuperior) {
            quantidade++;
        }
    }
    return quantidade;
}

module.exports = contar;

if (require.main === module) {
    console.log("Quantidade de valores:", contar([2, 5, 3, 8, 4, 1], 6));
}
