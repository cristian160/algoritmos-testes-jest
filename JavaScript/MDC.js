const { validarInteiro } = require("./validacao");

function calcularMDC(primeiro, segundo) {
    validarInteiro(primeiro, "O primeiro valor");
    validarInteiro(segundo, "O segundo valor");
    let dividendo = Math.abs(primeiro);
    let divisor = Math.abs(segundo);
    while (divisor !== 0) {
        const resto = dividendo % divisor;
        dividendo = divisor;
        divisor = resto;
    }
    return dividendo;
}

module.exports = calcularMDC;

if (require.main === module) {
    console.log("MDC de 48 e 18:", calcularMDC(48, 18));
}
