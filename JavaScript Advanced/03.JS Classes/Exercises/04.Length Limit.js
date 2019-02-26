class Stringer{
    constructor(innerString , innerLength){
        this.innerString  = innerString ;
        this.innerLength = innerLength;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        if (length >= this.innerLength){
            this.innerLength = 0;
        }else{
            this.innerLength -= length;
        }
    }

    toString(){
        let result = this.innerString.substr(0, this.innerLength) + "...";
        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
