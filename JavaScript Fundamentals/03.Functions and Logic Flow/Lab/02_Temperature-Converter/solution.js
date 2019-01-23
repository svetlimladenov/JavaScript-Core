function solve() {
    let degrees = Number(document.querySelector('#num1').value);
    let format = document.getElementById('type').value;
    let result = document.getElementById("result");

    result.textContent = format.toLowerCase() === 'celsius' ? Math.round((degrees * 9) / 5 + 32)
        : format.toLowerCase() === 'fahrenheit' ? Math.round(((degrees - 32) * 5) / 9)
        : 'Error!';
}