function solve() {
    let input = document.getElementById('str').value.split(' ');
    let wordInAscii = input
        .filter(x => isNaN(x))
        .map(word => word.split('').reduce((a, b) =>
                a + b.charCodeAt(0) + ' '
            ,'').trim()
        );
    let resultWord = input
        .filter(x => !isNaN(x))
        .map(item => Number(item))
        .reduce((a, b) => a + String.fromCharCode(b),'');

    let resultDiv = document.getElementById('result');
    wordInAscii.forEach(word => {
        let p = document.createElement('p');
        p.textContent = word;
        resultDiv.appendChild(p);
    });
    let p = document.createElement('p');
    p.textContent = resultWord;
    resultDiv.appendChild(p);
}