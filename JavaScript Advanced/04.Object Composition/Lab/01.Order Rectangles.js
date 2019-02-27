function solve(input) {
    let rectangles = [];
    
    input.forEach(rectangle => {
        let currentRectangle = (function () {
            let width = rectangle[0];
            let height = rectangle[1];

            return {
                width,
                height,
                area : function () {
                    return width * height;
                },
                compareTo : function (other) {
                    if (this.area() < other.area())
                    {
                        return -1;
                    }else if(this.area() === other.area()){
                        return 0;
                    }else{
                        return 1;
                    }
                }
            }
        })();
        rectangles.push(currentRectangle);
    });
    rectangles = rectangles.sort((a,b) => b.area() - a.area() || b.width - a.width);
    return rectangles;
}

let rectans = solve([[10,5], [3,20], [5,12]])
console.log(rectans);
console.log(rectans[0].area());
console.log(rectans[1].area());

console.log(rectans[1].compareTo(rectans[0]));