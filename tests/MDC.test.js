const calcularMDC = require("../JavaScript/MDC");

test("calcula o divisor comum de 48 e 18", () => {
    expect(calcularMDC(48, 18)).toBe(6);
});

test("aceita zero e um inteiro negativo", () => {
    expect(calcularMDC(0, -9)).toBe(9);
});

test("dois zeros retornam zero por convenção", () => {
    expect(calcularMDC(0, 0)).toBe(0);
});

test("rejeita números fracionários", () => {
    expect(() => calcularMDC(12, 2.5)).toThrow(TypeError);
});
