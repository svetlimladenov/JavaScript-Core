function DailyCalorieIntake(input, activeFactor) {
    let gender = input[0];
    let weight = Number(input[1]);
    let height = Number(input[2]);
    let age = Number(input[3]);

    let calories = 0;
    if (gender === "m"){
        calories = 66 + 13.8 * weight + 5 * height - 6.8 * age
    }else{
        calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age
    }

    if (activeFactor === 0){
        calories *= 1.2;
    }else if (activeFactor >= 1 && activeFactor <= 2) {
        calories *= 1.375;
    }else if(activeFactor >= 3 && activeFactor <= 5){
        calories *= 1.55;
    }else if(activeFactor >= 6 && activeFactor <= 7){
        calories *= 1.725;
    }else{
        calories *= 1.90;
    }
    console.log(Math.round(calories));
}

function CommonElements(firstArray, secondArray, thirdArray) {
    let commonNumbers = [];
    for (let i = 0; i < firstArray.length; i++) {
        let currentNumber = firstArray[i];
        if (secondArray.includes(currentNumber) && thirdArray.includes(currentNumber)){
            commonNumbers.push(currentNumber);
        }
    }
    function getSum(total, num) {
        return total + num;
    }

    let sumOfAll = commonNumbers.reduce(getSum);
    console.log("The common elements are " + commonNumbers.sort().join(", ") + ".");
    console.log("Average: " + sumOfAll / commonNumbers.length + ".");
    let median = 0;
    if (commonNumbers.length % 2 === 0){
        let n = commonNumbers.length / 2 - 1;
        let m = n + 1;
        median = (commonNumbers[n] + commonNumbers[m]) / 2;
    }else{
        let n = Math.floor(commonNumbers.length / 2);
        median = commonNumbers[n];
    }
    console.log("Median: " + median + ".");
}

function HumanizedNumber(input) {
        let regex = new RegExp("\\d+");
        while (regex.exec(input) !== null){
            let match = regex.exec(input)[0];
            input = input.replace(match,"");
            console.log(SetSuffix(match));
        }
        
        function SetSuffix(number) {
            if (number.length === 1){
                if (+number === 1){
                    return number + "st";
                }else if(+number === 2){
                    return number + "nd";
                }else if (+number === 3){
                    return number + "rd";
                }else{
                    return number + "th";
                }
            }else{
                if (number[number.length - 1] === "1" && +number !== 11){
                    return number + "st";
                }
                else if(number[number.length - 1] === "2" && +number !== 12){
                    return number + "nd";
                }
                else if(number[number.length - 1] === "3" && +number !== 13){
                    return number + "rd";
                }
                else{
                    return number + "th";
                }
            }
        }
}

function PerfectNumbers(input) {
    let perfects = [];
    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]);
        if(CheckIfPerfect(currentNumber) === true){
            perfects.push(currentNumber);
        }
    }
    if (perfects.length === 0){
        console.log("No perfect number");
    }else
        console.log(perfects.join(", "));

    function CheckIfPerfect(number) {
        let devisors = [];
        number = Number(number);
        for (let i = 1; i <= number; i++) {
            if (number % i === 0){
                devisors.push(i);
            }
        }

        function getSum(total, num) {
            return total + num;
        }

        let sumOfDevisors = devisors.reduce(getSum);
        if (sumOfDevisors / 2 === +number){
            return true;
        }else{
            return false;
        }
    }
}

function ConvertToCoins(amountOfMoney, coinValues) {
    coinValues.sort((a, b) => b - a);
    let coins = [];
    for (let i = 0; i < coinValues.length; i++) {
        while (amountOfMoney > 0){
            if (amountOfMoney - coinValues[i] >= 0){
                amountOfMoney -= coinValues[i];
                coins.push(coinValues[i]);
            }else{
                break;
            }
        }
    }

    console.log(coins.join(", "));
}

ConvertToCoins(123, [5, 50, 2, 1, 10]);