function solve(input) {
    let sum = input[0].reduce((a,b) => {return a + b});
    let isMagical = true;
    input.forEach((item,index) => {
        if (item.reduce((a,b) => {return a + b}) !== sum){
            isMagical = false;
        }
    });
    function transposeArray(array, arrayLength){
        let newArray = [];
        for(let i = 0; i < array.length; i++){
            newArray.push([]);
        }
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < arrayLength; j++){
                newArray[j].push(array[i][j]);
            }
        }
        return newArray;
    }
    let transposedArray = transposeArray(input,input.length);

    transposedArray.forEach((item,index) => {
        if (item.reduce((a,b) => {return a + b}) !== sum){
            isMagical = false;
        }
    });
    console.log(isMagical);
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);