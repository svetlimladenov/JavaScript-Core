function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class PersonClass{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        this._email = "";
        this.email = email;
    }

    get email(){
        return this._email;
    }

    set email(val){
        if (validateEmail(val) === false) {
            this._email = undefined;
        }else{
            this._email = val;
        }
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}


let p = new PersonClass("Peter", "Marinov", "pesho@abv.bg");
console.log(p.toString());


function Person(firstName, lastName, age, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}
Person.prototype.toString = function(){
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
};


module.exports = Person;