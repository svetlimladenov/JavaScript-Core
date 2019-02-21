const assert = require('chai').assert;
const funtionsToTest = require('./04.FunctionsToTest');
const sum = funtionsToTest.sum;
const isSymmetric = funtionsToTest.isSymmetric;

describe('SumTests', function () {
    it('should Sum Correct', function () {
        let arr = [1,2,3,4,5];
        let result = sum(arr);
        assert.equal(result,15);
    });
    it('empty Arr Should Sum 0', function () {
        assert.equal(sum([]),0);
    });
    it('Work only with arrays', function () {
        let callSum = () => sum(null);
        let callSumWithNum = () => sum(10);
        assert.throws(sum);
        assert.throws(callSum);
        assert.throws(callSumWithNum);
    });
});


describe('SummetryTests', function () {
    it('should return false if input not arr', function () {
        let result = isSymmetric('asdff');
        assert.equal(result,false);
        assert.equal(isSymmetric(1),false);
        assert.equal(isSymmetric(undefined),false);
    });
    it('should work fine with symmetric arrays', function () {
        let result = isSymmetric([1,2,3,2,1]);
        assert.equal(result,true);
    });

    it('should return false with string in arr', function () {
        let result = isSymmetric([1,2,3,2,'test']);
        assert.equal(false,result);
    });
    
    it("should return true if empty arr", () => {
        let expectedResult = isSymmetric([]);
        assert.isTrue(expectedResult);
    });

    it("should return false if no array isnt symmetric", () => {
        assert.isFalse(isSymmetric([1,2,3,4,5]));
    });
});