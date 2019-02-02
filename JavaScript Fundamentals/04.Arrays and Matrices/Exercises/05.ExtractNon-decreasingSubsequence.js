function solve(input) {
    let result = input.filter((number, index, array) => {
        let currentSlice = input.slice(0, index);
        let currentBiggestNumber = Math.max.apply(Math,currentSlice);
        if (array[index - 1] === undefined)
        {
            return true;
        }
        return number >= currentBiggestNumber && number >= array[index - 1];
    }).forEach((number) => console.log(number));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);