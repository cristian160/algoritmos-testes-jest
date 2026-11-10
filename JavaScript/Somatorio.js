const { validarLista } = require("./validacao");

function calcularSomatorio(numeros) {
    validarLista(numeros);
    let soma = 0;
    for (const numero of numeros) {
        soma += numero;
        if (!Number.isFinite(soma)) {
            throw new RangeError("A soma excede o limite numérico.");
        }
    }
    return soma;
}

module.exports = calcularSomatorio;

if (require.main === module) {
    console.log("Somatório:", calcularSomatorio([10, 20, 30, 40]));
}
