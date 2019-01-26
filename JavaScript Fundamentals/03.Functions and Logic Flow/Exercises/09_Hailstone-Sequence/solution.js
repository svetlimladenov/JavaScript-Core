function getNext() {
    let startingNumber = Number(document.getElementById('num').value);
    let result = [];
    getSequence(startingNumber);
    function getSequence(number) {
        if (number === 1){
            result.push(1);
            return;
        }
        if (number % 2 === 0){
            result.push(number);
            let next = number / 2;
            getSequence(next);
        }else{
            result.push(number);
            let next = (number * 3) + 1;
            getSequence(next);
        }
    }
    document.getElementById('result').textContent = result.join(' ') + ' ';
}