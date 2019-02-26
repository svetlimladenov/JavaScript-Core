class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint,secondPoint){
        let firstSide = firstPoint.x - secondPoint.x;
        let secondSide = firstPoint.y - secondPoint.y;
        let result = Math.sqrt(Math.pow(firstSide,2) + Math.pow(secondSide,2));
        return result;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));