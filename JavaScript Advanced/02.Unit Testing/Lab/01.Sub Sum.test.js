const sumSum = require('./01.Sub Sum');

const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('subSum', function () {
    it('should work fine', function () {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        let result = sumSum(arr,8,9);
        assert.equal(result,19);
    });

    it('ShoudReturnNaN', function () {
        let arr = [1,4,'text'];
        let result = sumSum(arr,0,3);
        assert.isNaN(result);
    })
});