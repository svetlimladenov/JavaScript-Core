function solve() {
    let result = document.getElementById('result');
    let arr = JSON.parse(document.getElementById('arr').value);
    let byValueOrdred = arr.sort((a,b) => a - b);
    let byValueDiv = document.createElement('div');
    byValueDiv.textContent = byValueOrdred.join(', ');

    let alphabeticalOrdered = arr.sort();
    let alphateticalDiv = document.createElement('div');
    alphateticalDiv.textContent = alphabeticalOrdered.join(', ');

    result.appendChild(byValueDiv);
    result.appendChild(alphateticalDiv);
}