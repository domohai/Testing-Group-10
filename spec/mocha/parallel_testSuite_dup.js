const mathService = require("../../parallel_test.js")
const assert = require('assert');

describe('mathService', () => {
    it('sum', () => {
        console.time('------------> mocha');
        assert.equal(mathService.sum(1, 1), 2);
        console.timeEnd('------------> mocha');
    });
});
describe('mathService', () => {
    it('sum', () => {
        console.time('------------> mocha');
        assert.equal(mathService.sum(2, 2), 4);
        console.timeEnd('------------> mocha');
    });
});