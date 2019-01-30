function solve(input) {
    let rotations = Number(input[input.length - 1]);
    let array = input.slice(0,input.length - 1);
    rotations = rotations % array.length;
    for (let i = 0; i < rotations; i++) {
        let lastElement = array[array.length - 1];
        array.unshift(lastElement);
        array.pop();
    }
    console.log(array.join(' '))
}
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']

);

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let result = "";
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        result += matrix[row][col];
    }
    result += "\n";
}
console.log(result);
