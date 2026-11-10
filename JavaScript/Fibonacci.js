const { validarInteiro } = require("./validacao");

function fibonacci(quantidade) {
    validarInteiro(quantidade, "A quantidade de termos");
    // O 80º termo ultrapassa o maior inteiro seguro do JavaScript.
    if (quantidade < 0 || quantidade > 79) {
        throw new RangeError("A quantidade deve estar entre 0 e 79.");
    }
    const termos = [];
    let atual = 0;
    let seguinte = 1;
    for (let indice = 0; indice < quantidade; indice++) {
        termos.push(atual);
        [atual, seguinte] = [seguinte, atual + seguinte];
    }
    return termos;
}

module.exports = fibonacci;

if (require.main === module) {
    console.log("Sequência de Fibonacci:");
    console.log(fibonacci(10).join(" "));
}
