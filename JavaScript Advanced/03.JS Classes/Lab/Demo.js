function FuncHuman(name, address) {
    this.name = name || "Pesho";
    this.address = address || "Kolusha";
}
FuncHuman.eat = function () {console.log('easting')};

let pesho = new FuncHuman();

FuncHuman.prototype.sleep = function() {};
FuncHuman.prototype.walk = function() {};

pesho.walk();
pesho.sleep();

let obj = {
    name : "Pepi",
    _name : "",
    address : "Mladost",
    walk : function () {}
};

Object.defineProperty(obj,'name',{
    get() {return this._name},
    set(v) { this._name = v}
});

obj._name = 5;
console.log(obj);

class ClassHuman {
    constructor(name, address){
        this.name = name || "Pesho";
        this.address = address;
        this.privatePropery = '123456pass';

        this._name = "";
        Object.defineProperty(this,'address',{
            value : "Mladost Ne Promenqvaemo",
            writable : false
        });

        //Object.freeze(this);
        //Object.seal(this);
    }

    get name(){
        return this._name;
    }
    set name(val){
        if (val === ''){
            //todo:
        }
        this._name = val;
    }

    walk(a,b){

    }
    sleep(){

    }

    static eat(){

    }
}

let peshoClass = new ClassHuman("Pesho","Sofia");
ClassHuman.eat();
peshoClass.sleep();
peshoClass.address = "Kopele";
console.log(peshoClass.name);
console.log(peshoClass.address);