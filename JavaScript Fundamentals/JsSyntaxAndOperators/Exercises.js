function Greeting(name) {
    console.log(`Hello ${name}, do you like JavaScript?`)
}

function PrintEvenNumber(end) {
    for (let i = 1; i <= end; i++) {
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

function Fruit(fruit,grams,pricePerKg){
    let kilograms = grams / 1000;
    let totalPrice = (kilograms * pricePerKg).toFixed(2);
    console.log(`I need ${totalPrice} leva to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

function FitnessRates(day, service, clock) {
    if (service === "Fitness"){
            if (day === "Saturday" || day === "Sunday"){
                console.log(8);
            }
            else{
                if (clock >= 8.00 && clock <= 15.00)
                {
                    console.log(5);
                }
                else{
                    console.log(7.5);
                }
            }
    }else if (service === "Sauna"){
        if (day === "Saturday" || day === "Sunday"){
            console.log(7);
        }
        else{
            if (clock >= 8.00 && clock <= 15.00)
            {
                console.log(4);
            }
            else{
                console.log(6.5);
            }
        }
    }else if (service === "Instructor"){
        if (day === "Saturday" || day === "Sunday"){
            console.log(15);
        }
        else{
            if (clock >= 8.00 && clock <= 15.00)
            {
                console.log(10);
            }
            else{
                console.log(12.5);
            }
        }
    }
}
//05.	Greatest Common Divisor
function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function SameNumbers(input) {
    input = input.toString();

    let sum = 0;
    let allNumbersAreSame = true;
    let repeatCharacter = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === repeatCharacter){

        }else {
            allNumbersAreSame = false;
        }
        sum += Number(input[i]);
    }
    console.log(allNumbersAreSame);
    console.log(sum);
}

function TimeToWalk(stepsCount, footprintLengthInMeters, speed) {
    let speedPerSecond = Math.round((speed * 1000)) / 3600;
    let metersTravelled = Math.round(stepsCount * footprintLengthInMeters);

    let breaks = Math.floor(metersTravelled / 500) * 60;

    let secondsTravelled = Math.round((metersTravelled / speedPerSecond) + breaks);

    let date = new Date(null);
    date.setSeconds(secondsTravelled);

    let result = date.toISOString().substr(11, 8);

    return result;
}

function FlightTimeTable(info) {
    let flightType = info[0];
    let town = info[1];
    let time = info[2];
    let flightNumber = info[3];
    let gateNumber = info[4];

    console.log(`${flightType}: Destination - ${town}, Flight - ${flightNumber}, Time - ${time}, Gate - ${gateNumber}`);
}

function CalorieObject(input) {
    let allProducts = {};
    for (let i = 0; i < input.length - 1; i+=2) {
        allProducts[input[i]] = Number(input[i + 1]);
    }

    return allProducts;
}

function CoffeeMachine(input) {
    let totalIncome = 0;
    for (let singleInput of input){
        let currentPrice = 0;
        let inputArgs = singleInput.split(", ");
        let product = inputArgs[1];
        if (product === "coffee"){
            let coffeeType = inputArgs[2];
            if (coffeeType === "caffeine"){
                currentPrice += 0.80;
                if (inputArgs[3] === "milk"){
                    let milkPrice = (0.80 * 0.10).toFixed(1);
                    currentPrice += +milkPrice;
                }
            }else if (coffeeType === "decaf"){
                currentPrice += 0.90;
                if (inputArgs[3] === "milk"){
                    let milkPrice = (0.90 * 0.10).toFixed(1);
                    currentPrice += +milkPrice;
                }
            }
        }else if(product === "tea"){
            currentPrice += 0.80;
            if (inputArgs[2] === "milk"){
                let milkPrice = (0.80 * 0.10).toFixed(1);
                currentPrice += +milkPrice;
            }
        }
        let sugar = +inputArgs[inputArgs.length - 1];
        if (sugar !== 0){
            currentPrice += 0.10;
        }
        let coinsInserted = Number(inputArgs[0]);

        if (coinsInserted >= currentPrice){
            totalIncome += currentPrice;
            let change = (coinsInserted - currentPrice).toFixed(2);
            console.log(`You ordered ${product}. Price: ${currentPrice.toFixed(2)}$ Change: ${change}$`);
        }else{
            let moneyNeededMore = currentPrice - coinsInserted;
            console.log(`Not enough money for ${product}. Need ${moneyNeededMore.toFixed(2)}$ more.`)
        }
    }
    console.log(`Income Report: ${totalIncome.toFixed(2)}$`)
}

CoffeeMachine(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']

);