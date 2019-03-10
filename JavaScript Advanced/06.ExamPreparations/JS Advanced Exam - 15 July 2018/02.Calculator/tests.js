const assert = require('chai').assert;
const Calculator = require('./calculator');

describe("Add tests", function() {
    it("should work fine with normal inputs", function() {
        let calc = new Calculator();
        calc.add(10);
        calc.add(15);
        calc.add('Test');
        let expected = '10 -> 15 -> Test';
        assert.equal(calc.toString(),expected);
    });
});

describe("Divide nums", function () {
    it('should devide nums correct', function () {
        let calc = new Calculator();
        calc.add(10);
        calc.add(5);
        calc.add('test');
        assert.equal(calc.divideNums(),2);
    });
    it('should throw error if no numbers', function () {
        let calc = new Calculator();
        calc.add('Ivan');
        calc.add('Test');
        let callDevide = () => calc.divideNums();
        assert.throws(callDevide);
    });

    it('should return message if try to devide by 0', function () {
        let calc = new Calculator();
        calc.add(5);
        calc.add(0);
        assert.equal(calc.divideNums(),'Cannot divide by zero');
    });
});


describe('To String', function () {
    it('should return empty array', function () {
        let calc = new Calculator();
        assert.equal(calc.toString(),'empty array');
    });
});

describe('Order by', function () {
    it('should order number fine', function () {
        let calc = new Calculator();
        calc.add(5);
        calc.add(2);
        calc.add('test');
        assert.equal(calc.orderBy(),'2, 5, test');
    });
});
