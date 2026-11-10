const calcularSomatorio = require("../JavaScript/Somatorio");

test("soma os valores do exemplo em Java", () => {
    expect(calcularSomatorio([10, 20, 30, 40])).toBe(100);
});

test("soma valores positivos e negativos", () => {
    expect(calcularSomatorio([-10, 20])).toBe(10);
});

test("a soma vazia é zero", () => {
    expect(calcularSomatorio([])).toBe(0);
});

test("rejeita um argumento que não é lista", () => {
    expect(() => calcularSomatorio(10)).toThrow(TypeError);
});

test("rejeita soma infinita", () => {
    expect(() => calcularSomatorio([Number.MAX_VALUE, Number.MAX_VALUE])).toThrow(RangeError);
});
