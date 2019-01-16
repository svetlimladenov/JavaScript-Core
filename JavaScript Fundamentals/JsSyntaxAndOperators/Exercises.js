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

FitnessRates("Saturday","Fitness",20);