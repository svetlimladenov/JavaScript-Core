function solve(input) {
    let step = Number(input[input.length - 1]);
    for (let i = 0; i < input.length - 1; i+=step) {
        console.log(input[i]);
    }
}
solve(['1',
    '2',
    '3',
    '4',
    '5',
    '6']
);