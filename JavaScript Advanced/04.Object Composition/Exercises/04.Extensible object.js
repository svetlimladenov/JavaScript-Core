let myObj = {
    __proto__: {},
    extend: function extend (template){
        for(let prop in template){
            if (typeof template[prop] === 'function'){
                this.__proto__[prop] = template[prop];
            }else{
                this[prop] = template[prop];
            }
        }
    }
};

let template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};


myObj.extend(template);
console.log(Object.getPrototypeOf(myObj));
console.log(myObj);

//For judge submission.
function solve(){
    let resultObj = {
        extend: function extend (template){
            for(let prop in template){
                if (typeof template[prop] === 'function'){
                    this.__proto__[prop] = template[prop];
                }else{
                    this[prop] = template[prop];
                }
            }
        }
    };
    return resultObj;
}