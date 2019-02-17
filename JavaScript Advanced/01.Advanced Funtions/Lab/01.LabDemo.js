function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function dollarFormatter(value) {
    return currencyFormatter('.', '$', true,value);
}

const dolar = dollarFormatter(700);


function getDollarFormatter(formatter) {
    return (value) => {
        return formatter(',', '$', true, 600);
    }
}



const dollarFormatterAgain = getDollarFormatter(currencyFormatter);
const dollar2 = dollarFormatterAgain(500);


function getCounter() {
    let counter = 0;
    return function count() {
        console.log(++counter);
    }
}

const f = getCounter();
//f();
//f();
const g = getCounter();
//g();


const vehicle = {
    type : 'car',
    speed : 200,
    drive :function () { console.log('The ' + this.type + ' is moving with ' + this.speed + ' km/h')}
};

vehicle.drive();

const car = vehicle.drive.bind(vehicle);

const motor = {
    type : 'motor',
    speed : 300
};

vehicle.drive.call(motor);

const m = vehicle.drive.bind(motor);
m();

//ARRAY - WITH APPLY ELSE WITH CALL



function sum(a,b) {
    return a + b;
}

function sum1(a) {
    return sum(a,5);
}

console.log(sum1(3));

//IFFE
(() => {
    let m = 0;
})();


let ifff = (() => {
    let counter = 0;
    return function () {
        console.log(++counter);
    }
})();

let result = (function () {
    let name = "Barry";
    console.log(this === global);
    return name;
})();

