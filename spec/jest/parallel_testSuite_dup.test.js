const mathService = require("../../parallel_test.js")
describe('mathService', () => {
    test('sum', () => {
        console.time('------------> jest');
        expect(mathService.sum(1, 1)).toBe(2);
        console.timeEnd('------------> jest');
    });
});
describe('mathService', () => {
    test('sum', () => {
        console.time('------------> jest');
        expect(mathService.sum(2, 2)).toBe(4);
        console.timeEnd('------------> jest');
    });
});