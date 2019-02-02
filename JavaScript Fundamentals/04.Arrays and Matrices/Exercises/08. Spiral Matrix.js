function solve(rows,cols){
    function createEmptyMatrix(rows, cols) {
        let newMatrix = [];
        for (let i = 0; i < rows; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < cols; j++) {
                newMatrix[i][j] = 0;
            }
        }
        return newMatrix;
    }
    function printMatrix(matrix) {
        matrix.forEach((row,index) => {
            console.log(row.join(' '));
        })
    }
    let matrix = createEmptyMatrix(rows,cols);
    let currentCol = 0;
    let currentRow = 0;
    let step = 1;
    let direction = 'right';
    while (true){
        if (typeof matrix[currentRow] === "undefined"){
            break;
        }else if(typeof matrix[currentRow][currentCol] === "undefined"){
            break;
        }
        
        if (matrix[currentRow][currentCol] === 0 && direction === 'right'){
            matrix[currentRow][currentCol] = step;
            if (currentCol < matrix.length - 1 && matrix[currentCol][currentCol + 1] === 0){
                currentCol++;
            }else {
                direction = 'down';
                currentRow++;
            }
        }else if(matrix[currentRow][currentCol] === 0 && direction === 'down'){
            matrix[currentRow][currentCol] = step;
            if (currentRow < matrix.length - 1 && matrix[currentRow + 1][currentCol] === 0){
                currentRow++;
            }else{
                direction = 'left';
                currentCol--;
            }
        }else if (matrix[currentRow][currentCol] === 0 && direction === 'left'){
            matrix[currentRow][currentCol] = step;
            if (currentCol >= 0 && matrix[currentRow][currentCol - 1] === 0){
                currentCol--;
            }else{
                direction = 'up';
                currentRow--;
            }
        }else if(matrix[currentRow][currentCol] === 0 && direction === 'up'){
            matrix[currentRow][currentCol] = step;
            if (matrix[currentRow - 1][currentCol] === 0){
                currentRow--;
            } else {
                direction = 'right';
                currentCol++;
            }
        }else{
            break;
        }
        step++;
    }
    printMatrix(matrix);
}

solve(10,10);