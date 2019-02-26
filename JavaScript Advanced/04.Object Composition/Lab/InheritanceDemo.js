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

console.log(svetli.eyeColor);
console.log(svetli.address);
console.log(svetli.name);
console.log(Object.getPrototypeOf(svetli).name);