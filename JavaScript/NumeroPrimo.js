const { validarInteiro } = require("./validacao");

function ehPrimo(numero) {
    validarInteiro(numero, "O número");
    if (numero < 2) {
        return false;
    }
    const limite = Math.floor(Math.sqrt(numero));
    for (let divisor = 2; divisor <= limite; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

module.exports = ehPrimo;

if (require.main === module) {
    const numero = 17;
    console.log(numero, ehPrimo(numero) ? "é primo." : "não é primo.");
}
