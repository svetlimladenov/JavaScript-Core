const assert = require('chai').assert;
const functions = require('./02.FuntionsToBeTested');
const isOddOrEven = functions.isOddOrEven;
describe('Is Odd or Even Lenght', function () {

    it('should work fine', function () {
        let even = isOddOrEven('abcd');
        assert.equal(even,'even');
        let odd = isOddOrEven('abc');
        assert.equal(odd,'odd');
    });
    it('should return undefined, with number parameter', function () {
        let result = isOddOrEven(5);
        assert.equal(result,undefined);
    });

    it('should return undefined, with obj param', function () {
        let result = isOddOrEven({a : 5});
        assert.equal(result,undefined);
    });
});

const mathEnforcer = functions.mathEnforcer;

describe('Math enforcer', function(){
    it('functions should work fine with normal inputs', function () {
        assert.equal(mathEnforcer.addFive(5),10);
        assert.equal(mathEnforcer.subtractTen(10),0);
        assert.equal(mathEnforcer.sum(5,5),10);
    });

    it('should return undefined if not correct input', function () {
        assert.equal(mathEnforcer.addFive('text'),undefined);
        assert.equal(mathEnforcer.subtractTen('text'),undefined);
        assert.equal(mathEnforcer.sum(5,'text'),undefined);
    });

    it("should work fine with floating point nubmers", () => {
        let result = mathEnforcer.sum(2.75, 2.75);
        assert.closeTo(result, 5.5, 0.01);
    });

    it("should return 0 for 0, 0 as a parameter", () => {
        let result = mathEnforcer.sum(0, 0);
        assert.equal(result, 0);
    });

    it("should return NaN for invalid type of the parameter", () => {
        assert.isNaN(mathEnforcer.addFive(NaN));
        assert.isNaN(mathEnforcer.sum(NaN,NaN));
        assert.isNaN(mathEnforcer.subtractTen(NaN));
    });
});