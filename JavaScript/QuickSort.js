const { validarLista } = require("./validacao");

function ordenar(valores) {
    if (valores.length <= 1) {
        return valores.slice();
    }
    const pivo = valores[Math.floor(valores.length / 2)];
    const menores = [];
    const iguais = [];
    const maiores = [];
    for (const valor of valores) {
        if (valor < pivo) {
            menores.push(valor);
        } else if (valor > pivo) {
            maiores.push(valor);
        } else {
            iguais.push(valor);
        }
    }
    return ordenar(menores).concat(iguais, ordenar(maiores));
}

function quickSort(valores) {
    validarLista(valores);
    return ordenar(valores);
}

module.exports = quickSort;

if (require.main === module) {
    const valores = [10, 7, 8, 9, 1, 5];
    console.log("Antes:", valores);
    console.log("Depois:", quickSort(valores));
}
