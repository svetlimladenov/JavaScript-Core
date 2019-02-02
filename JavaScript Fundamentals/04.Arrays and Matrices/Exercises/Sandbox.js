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

let matrix = [[1,2,3],[4,5,6]];
let result = matrix.map((m) => {
    return m.map((number) => {return ++number});
});
console.log(result);

let m = [2,4,2,6,1,100,12];
m = m.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
});
console.log(m);

let myCard = [];

function addToCard(card, item) {
    let currentCard = card.slice(0);
    currentCard.push(item);

    return currentCard;
}
myCard = addToCard(myCard,1);
myCard = addToCard(myCard,5);
myCard = addToCard(myCard,4);
myCard = addToCard(myCard,2);
console.log(myCard);


let input = [
    [20,40,10],
    [10,60,70],
    [100,5,20],
];

/*let firstSum = 0;

for (let i = 0; i < input.length; i++) {
    firstSum += input[i][i];
}
let secondSum = 0;
for (let i = input.length - 1; i >= 0; i--) {
    let row = Number(input.length - i - 1);
    secondSum += input[i][row];
}*/

let firstSum = input.map((item, index) => {
    return +item.filter((innerItem, innerIndex) => innerIndex === index)[0];
}).reduce((a,b) => {return a + b});

let secondSum = input.map((item, index) => {
    return +item.filter((innerItem, innerIndex) => innerIndex === item.length - index - 1)[0];
}).reduce((a,b) => {return a + b});
console.log(firstSum);
console.log(secondSum);