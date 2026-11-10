const fibonacci = require("../JavaScript/Fibonacci");

test("gera os dez primeiros termos", () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test("gera apenas os dois primeiros termos", () => {
    expect(fibonacci(2)).toEqual([0, 1]);
});

test("zero termos produz uma lista vazia", () => {
    expect(fibonacci(0)).toEqual([]);
});

test("rejeita quantidade negativa", () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
});

test("rejeita quantidade que perde precisão", () => {
    expect(() => fibonacci(80)).toThrow(RangeError);
});
