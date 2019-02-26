class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }
    unite(rat){
        if (!rat){
            return;
        }
        if (rat.constructor.name !== "Rat"){
            return;
        }
        this.unitedRats.push(rat);
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        let result = this.name + '\n' + this.unitedRats.map(x => '##' + x).join('');
        return result;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());

console.log(test.toString());