let human = {
    name : "Pesho",
    eyeColor : "brown",
    walk : function () {
        return "walking";
    }
};

let svetli = Object.create(human);
svetli.name = "Svetli";

human.address = "Kolusha";

Object.getPrototypeOf(human).age = 5;

console.log(svetli.eyeColor);
console.log(svetli.address);
console.log(svetli.name);
console.log(svetli.age);
console.log([].age);

let a = {};
debugger;

console.log(svetli.__proto__ == human);