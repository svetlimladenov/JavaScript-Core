class Circle{
    constructor(radius){
        this.radius = radius;
        this._diameter = radius * 2;
    }

    get diameter(){
        return this._diameter;
    }
    set diameter(val){
        this._diameter = val;
        this.radius = val / 2;
    }

    get area(){
        let area = Math.PI * this.radius * this.radius;
        return area;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);


function CircleFunc(radius) {
    this.radius = radius;
    this._diameter = radius * 2;
    Object.defineProperty(this,'diameter',{
        get() {
            return this._diameter;
        },
        set(v) {
            this.radius = v / 2;
            this._diameter = v;
        }
    });

    Object.defineProperty(this,'area',{
        get() {
            let area = Math.PI * this.radius * this.radius;
            return area;
        },
    })
}

let f = new CircleFunc(2);
console.log(`Radius: ${f.radius}`);
console.log(`Diameter: ${f.diameter}`);
console.log(`Area: ${f.area}`);
f.diameter = 1.6;
console.log(`Radius: ${f.radius}`);
console.log(`Diameter: ${f.diameter}`);
console.log(`Area: ${f.area}`);

