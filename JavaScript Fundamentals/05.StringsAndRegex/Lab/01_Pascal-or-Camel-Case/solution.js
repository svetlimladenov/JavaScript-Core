function solve() {
    let input = document.getElementById('str1').value;
    let caseOutput = document.getElementById('str2').value;
    input = input.toLowerCase()
        .split(' ')
        .filter(x => x !== '') // or just x
        .map(e => e[0].toUpperCase() + e.slice(1)).join('');
    if (caseOutput === 'Camel Case')
    {
        input = input[0].toLowerCase() + input.slice(1);
    }else if(caseOutput !== 'Pascal Case'){
        input = 'Error!';
    }

    document.getElementById('result').textContent = input;
}