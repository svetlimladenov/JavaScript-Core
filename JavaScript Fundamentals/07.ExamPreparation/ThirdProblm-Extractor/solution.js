function solve() {
    document.querySelector('button').addEventListener('click', () => {
        let input = document.getElementById('input').value;
        let regexForDigits = /\d+/g;
        let startNumber = +regexForDigits.exec(input)[0];
        let slicedInput = input.slice(startNumber.toString().length,startNumber + startNumber.toString().length);

        let charToSplitWith = slicedInput[slicedInput.length - 1];
        let splitedInput = slicedInput.split(charToSplitWith).filter(x => x !== '');
        let regexPattern = '[' + splitedInput[0] + ']';

        let regexFromString = new RegExp(regexPattern, 'g');
        input = splitedInput[1];
        let matches = input.match(regexFromString);
        matches.forEach(match => {
            input = input.replace(match,'');
        });
        input = input.split('').map(symbol => {
            if (symbol === '#')
            {
                return ' ';
            }else{
                return symbol;
            }

        }).join('');
        document.getElementById('output').value = input;
    });
}