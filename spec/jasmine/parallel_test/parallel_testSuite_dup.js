const mathService = require("../../../parallel_test.js")
describe('mathService', () => {
    it('sum', () => {
        console.time('------------> jasmine');
        expect(mathService.sum(1, 1)).toEqual(2);
        console.timeEnd('------------> jasmine');
    });
});
describe('mathService', () => {
    it('sum', () => {
        console.time('------------> jasmine');
        expect(mathService.sum(2, 2)).toEqual(4);
        console.timeEnd('------------> jasmine');
    });
});