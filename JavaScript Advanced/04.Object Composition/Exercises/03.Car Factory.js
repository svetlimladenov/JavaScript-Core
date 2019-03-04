function solve(carInput){
    let car = {};
    car.model = carInput.model;

    if(carInput.power <= 90){
        car.engine = {
            power: 90,
            volume: 1800
        }
    } else if(carInput.power > 90 && carInput.power <= 120){
        car.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }

    if(carInput.carriage === "hatchback"){
        car.carriage = {
            type: "hatchback",
            color: carInput.color
        }
    } else {
        car.carriage = {
            type: "coupe",
            color: carInput.color
        }
    }

    let wheelSize = carInput.wheelsize;
    if(wheelSize % 2 === 0){
        wheelSize--;
    }

    let wheels = [ wheelSize, wheelSize, wheelSize, wheelSize ];
    car.wheels = wheels;

    return car;
}