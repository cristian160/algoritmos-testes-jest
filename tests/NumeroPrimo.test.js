const ehPrimo = require("../JavaScript/NumeroPrimo");

test("identifica 17 como primo", () => {
    expect(ehPrimo(17)).toBe(true);
});

test("identifica o quadrado de um primo como composto", () => {
    expect(ehPrimo(49)).toBe(false);
});

test("um não é primo", () => {
    expect(ehPrimo(1)).toBe(false);
});

test("rejeita números informados como texto", () => {
    expect(() => ehPrimo("17")).toThrow(TypeError);
});
