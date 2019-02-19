const hello = function () {
    console.log('First class func');
};

function solve(helloFunc) {
    helloFunc();
    console.log('Hello');
}
solve(hello);
solve(function () {console.log('aaaa')});
solve(x => console.log('aaaa'));
[].map(x => x); // same

//IIFE and Closure

const example = (function () {
    let value = 0;
    let obj = {};
    let arr = [];
    //Closure


    return function () {
        value++;
        console.log(value);
        return this;
    }
})();
example();
example();

//THIS DEMO
console.log('THIS DEMOO ===================================================================================================================');
//ARROW FUNCTION DONT HAVE THIS
function test() {
    console.log(this);
}

let thisObj = {
    name : 'Ivan',
    age : 15,
    sayHello : function () {
        console.log(this.name);
    }
};
thisObj.sayHello();