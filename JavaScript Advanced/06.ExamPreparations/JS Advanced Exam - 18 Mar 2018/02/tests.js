const assert = require('chai').assert;
const PaymentPackage = require('./PaymentPackage');
// describe("Initialize", function () {
//     it('should throw error', function () {
//         let initialize = () => new PaymentPackage();
//         assert.throws(initialize);
//     });
//     it('should throw error', function () {
//         let initialize = () => new PaymentPackage('Ivan');
//         assert.throws(initialize);
//     });
//     it('should not throw', function () {
//         let initialize = () => new PaymentPackage("Test",200);
//         assert.doesNotThrow(initialize);
//     });
//
//     it("should instanciate properly", () => {
//         let testObj = new PaymentPackage("test", 10);
//
//         let result = testObj.name === "test" && testObj.value === 10 && testObj.VAT === 20 && testObj.active;
//
//         assert.isTrue(result);
//     });
// });


describe("Name", function() {
    it("should work fine", function() {
        let pp = new PaymentPackage('Ivan',15);
        assert.equal(pp.name,'Ivan');
    });
    it('should throw on invalid change', function () {
        let pp = new PaymentPackage('Ivan',1);
        let initialize = () => pp.name = '';
        assert.throws(initialize);
    });
    it('should throw empty str', function () {
        let initialize = () => new PaymentPackage('',1);
        assert.throws(initialize);
    });
});

describe("Value", function() {
    it("should work fine", function() {
        let pp = new PaymentPackage('Ivan',15);
        assert.equal(pp.value,15);
    });
    it('should throw', function () {
        let initialize = () => new PaymentPackage('Ivan','str');
        assert.throws(initialize);
    });
    it('should throw negative number', function () {
        let initialize = () => new PaymentPackage('saf',-1);
        assert.throws(initialize);
    });
});

describe("VAT", function() {
    it("should work fine", function() {
        let pp = new PaymentPackage('Ivan',15);
        assert.equal(pp.VAT,20);
    });
    it('should throw', function () {
        let pp = new PaymentPackage('Ivan',15);
        let initialize = () => pp.VAT = "sad f";
        assert.throws(initialize);
    });
    it('should throw when negative number', function () {
        let pp = new PaymentPackage('Ivan',15);
        let initialize = () => pp.VAT = -20;
        assert.throws(initialize);
    });
});

describe("Active", function() {
    it("should work fine", function() {
        let pp = new PaymentPackage('Ivan',15);
        assert.equal(pp.active,true);
    });
    it('should throw', function () {
        let pp = new PaymentPackage('Ivan',15);
        let initialize = () => pp.active = {};
        assert.throws(initialize);
    });
    it('should change', function () {
        let pp = new PaymentPackage('Ivan',15);
        pp.active = false;
        assert.equal(pp.active, false);
    });
});

describe("toString", function() {
    it("should work fine", function() {
        const packages = [
            new PaymentPackage('HR Services', 1500),
            new PaymentPackage('Consultation', 800),
            new PaymentPackage('Partnership Fee', 7000),
        ];
        const actual = packages.join('\n');
        const expected = 'Package: HR Services\n' +
            '- Value (excl. VAT): 1500\n' +
            '- Value (VAT 20%): 1800\n' +
            'Package: Consultation\n' +
            '- Value (excl. VAT): 800\n' +
            '- Value (VAT 20%): 960\n' +
            'Package: Partnership Fee\n' +
            '- Value (excl. VAT): 7000\n' +
            '- Value (VAT 20%): 8400';
        assert.equal(actual,expected);
    });

    it('should change active and inactive', function () {
        const pp = new PaymentPackage('HR Services', 1500);
        pp.active = false;
        let actual = pp.toString();
        let expected = 'Package: HR Services (inactive)\n' +
            '- Value (excl. VAT): 1500\n' +
            '- Value (VAT 20%): 1800';
        assert.equal(actual,expected);
    });

    it('should change active and inactive', function () {
        const pp = new PaymentPackage('HR Services', 1500);
        pp.active = true;
        let actual = pp.toString();
        let expected = 'Package: HR Services\n' +
            '- Value (excl. VAT): 1500\n' +
            '- Value (VAT 20%): 1800';
        assert.equal(actual,expected);
    });
});
