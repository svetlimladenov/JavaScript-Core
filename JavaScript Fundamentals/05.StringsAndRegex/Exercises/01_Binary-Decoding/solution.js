function solve() {
    let input = document.getElementById('str').value;
    console.log(input.length);
    let sum = input
        .split('')
        .map(item => +item)
        .reduce((a,b) => a + b);
    function reduceToOneDigit(number){
        let workingNumber = number.toString();
        if (workingNumber.length === 1)
        {
            return +workingNumber;
        }
        workingNumber = workingNumber.split('')
            .map(item => +item)
            .reduce((a,b) => a + b);
        return reduceToOneDigit(workingNumber);
    }
    sum = reduceToOneDigit(sum);

    console.log(sum);
    input = input.substr(sum, input.length - sum * 2);
    let groups = input.match(/.{8}/g);
    console.log(groups);
    let result = groups.map(element => {
        return parseInt(element,2);
    }).reduce((a,b) => a + String.fromCharCode(+b),'');

    document.getElementById('result').textContent = result;
    document.getElementById('str').value = "";
}

solve('010011100110110111101100110011101000111010101101110011010010010000001110011011101000111010101100100011001010110111001110100010');