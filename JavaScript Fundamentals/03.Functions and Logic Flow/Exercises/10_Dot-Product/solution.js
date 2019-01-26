function solve() {
	let firstMatrix = document.getElementById('mat1').value;
    let secondMatrix = document.getElementById('mat2').value;

    function multiply(a, b) {
        let aNumRows = a.length, aNumCols = a[0].length,
            bNumRows = b.length, bNumCols = b[0].length,
            m = new Array(aNumRows);  // initialize array of rows
        for (let r = 0; r < aNumRows; ++r) {
            m[r] = new Array(bNumCols); // initialize the current row
            for (let c = 0; c < bNumCols; ++c) {
                m[r][c] = 0;             // initialize the current cell
                for (let i = 0; i < aNumCols; ++i) {
                    m[r][c] += a[r][i] * b[i][c];
                }
            }
        }
        return m;
    }

    console.log(multiply(firstMatrix, secondMatrix));;
}