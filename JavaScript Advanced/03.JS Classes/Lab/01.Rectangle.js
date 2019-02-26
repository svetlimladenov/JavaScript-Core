class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    get area() {
        return this.calcArea();
    }

    calcArea(){
        return this.width * this.height;
    }

}

let rect = new Rectangle(4,5,'red');
console.log(rect.calcArea());

//SAME THING WRITTEN WITHOUT CLASS

function RectangleFunc(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;

    Object.defineProperty(this, 'area', {
        get() { return this.calcArea(); },
    });
}

RectangleFunc.prototype.calcArea = function () {
  return this.width * this.height;
};



let rectFunc = new RectangleFunc(4,5,'red');
console.log(rectFunc.area);