function solve(inputArr){
        inputArr.sort((a,b) => {
            let byLenght = +a.length - +b.length;
            let byLetters = a.toLowerCase() >= b.toLowerCase();
            return byLenght ? byLenght : byLetters;
        })
        .forEach((el) => { console.log(el)});
}

solve(['test',
    'Deny',
    'omen',
    'Default']);
