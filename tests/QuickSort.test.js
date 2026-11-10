const quickSort = require("../JavaScript/QuickSort");

test("ordena números em ordem crescente", () => {
    expect(quickSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
});

test("preserva repetições e ordena negativos", () => {
    expect(quickSort([3, -1, 3, 0])).toEqual([-1, 0, 3, 3]);
});

test("ordena uma lista vazia", () => {
    expect(quickSort([])).toEqual([]);
});

test("rejeita NaN", () => {
    expect(() => quickSort([1, NaN])).toThrow(TypeError);
});
