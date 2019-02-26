const StringBuilder = require('./07.String Builder');
const assert = require('chai').assert;

describe("TODO …", function() {
    describe("VrfyParam", function () {
        it('should not throw with strings', function () {
            let callVrfyWithString = () => StringBuilder._vrfyParam("str");
            assert.doesNotThrow(callVrfyWithString);
        });

        it('should throw with non strings', function () {
            let callVrfy = () => StringBuilder._vrfyParam(null);
            let callVrfyNumber = () => StringBuilder._vrfyParam(1);
            let callVrfyWithTrue = () => StringBuilder._vrfyParam(true);
            assert.throws(StringBuilder._vrfyParam);
            assert.throws(callVrfy);
            assert.throws(callVrfyNumber);
            assert.throws(callVrfyWithTrue);
        });
    });



    describe("Append", function () {
        it("Should work fine with correct input", function() {
            const newSB = new StringBuilder('ab');
            newSB.append('cd');
            assert.equal(newSB.toString(),'abcd');
        });
        it('should throw with non strings', function () {
            let callAppendWithInvalidValue = () => newSB.append({str : 'str'});
            assert.throws(callAppendWithInvalidValue,ReferenceError);
        });
    });

    describe("Prepend", function () {
        it("Should work fine with correct input", function() {
            const newSB = new StringBuilder('ab');
            newSB.prepend('cd');
            assert.equal(newSB.toString(),'cdab');
        });
        it('should throw with non strings', function () {
            let callAppendWithInvalidValue = () => newSB.prepend(false);
            assert.throws(callAppendWithInvalidValue,ReferenceError);
        });
    });

    describe("InsertAt", function () {
        it("Should work fine with correct input", function() {
            const newSB = new StringBuilder('ab');
            newSB.insertAt('cd',1);
            assert.equal(newSB.toString(),'acdb');
        });


    });

    describe("Remove", function () {
        it("Should work fine with correct input", function() {
            const newSB = new StringBuilder('abcd');
            newSB.remove(1,2);
            assert.equal(newSB.toString(),'ad');
        });
    });

    describe("ToString", function () {
        it("Should work fine with correct input", function() {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop',5 );
            assert.equal(str.toString(),'User,woop hello, there');
        });
    })
});
