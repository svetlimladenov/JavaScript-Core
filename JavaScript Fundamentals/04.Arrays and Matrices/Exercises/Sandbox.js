//let dogs = ["Goshe","Labrador","Huskey","Labrador"];

let dogs = [{
    name : "Pesho",
    address : "doma"
},{
    name : "Gosho",
    address : "doma"
},{
    name : "Ivan",
    address : "doma"
},{
    name : "Bezdomen",
}];

let myDog = "labrador";

let huskies = dogs
    .map((dog) => {
        if (dog.address !== undefined){
            return dog.name + " lives at " + dog.address;
        }
    })
    .forEach((dog) => console.log(dog));

let numbers = [1,2,3,4];
let sum = numbers.reduce((acc,cur) =>{
    acc.push(cur);
    return acc;
}, []);
console.log(sum);
