const contar = require("../JavaScript/Contagem");

test("inclui os dois extremos e ignora valores fora deles", () => {
    expect(contar([2, 1, 6, 8, 2], 6)).toBe(3);
});

test("uma lista vazia tem contagem zero", () => {
    expect(contar([], 6)).toBe(0);
});

test("um limite abaixo do primeiro elemento resulta em zero", () => {
    expect(contar([5, 2, 3], 3)).toBe(0);
});

test("rejeita elementos fracionários", () => {
    expect(() => contar([2, 3.5], 5)).toThrow(TypeError);
});
