function validarInteiro(valor, nome) {
    if (!Number.isSafeInteger(valor)) {
        throw new TypeError(nome + " deve ser um número inteiro seguro.");
    }
}

function validarLista(valores) {
    if (!Array.isArray(valores)) {
        throw new TypeError("Informe uma lista de números.");
    }
    for (const valor of valores) {
        if (!Number.isFinite(valor)) {
            throw new TypeError("Cada elemento deve ser um número finito.");
        }
    }
}

module.exports = { validarInteiro, validarLista };
