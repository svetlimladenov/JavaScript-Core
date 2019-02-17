function solve(arr, direction) {
    let arrCopy = arr.slice(0);
    const ascComparer = function (a,b) {
        return a - b;
    };
    const descComparer = function (a,b) {
        return b - a;
    };
    if (direction === 'asc'){
        return arrCopy.sort(ascComparer)
    }else{
        return arrCopy.sort(descComparer);
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));