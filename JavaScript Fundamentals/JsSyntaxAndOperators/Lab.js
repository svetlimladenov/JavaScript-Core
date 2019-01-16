function GetStringLenght(a,b,c)
{
    console.log(a.length + b.length + c.length);
    console.log(Math.floor((a.length + b.length + c.length) / 3));
}

function MathOperation(num1, num2, operator ) {
    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        case "%":
            console.log(num1 % num2);
            break;
        case "**":
            console.log(num1 ** num2);
            break;
        default:
            console.log("Error");
            break;
    }
}

function SumOfNumbers(start,end) {
    let castedStart = Number(start);
    let castedEnd = Number(end);
    let result = 0;
    for (let i = castedStart; i <= castedEnd; i++) {
        result+=i;
    }
    return result;
}

function GetLargestNum(num1,num2,num3){
    let largestNumber = Math.max(Math.max(num1,num3),num2);
    console.log("The largest number is " + largestNumber + ".");
}

function CircleArea(input){
    let inputType = typeof (input);
    if (inputType !== "number"){
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
        return;
    }
    let result = Math.pow(input, 2) * Math.PI;
    console.log(result.toFixed(2))
}

CircleArea(5);