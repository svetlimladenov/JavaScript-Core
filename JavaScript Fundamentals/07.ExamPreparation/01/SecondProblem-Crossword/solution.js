function solve() {
    let buttons = document.querySelectorAll('button');
    let output = document.querySelector('#output p');
    buttons[0].addEventListener('click',() => filterInput());
    buttons[1].addEventListener('click', () => sortInput());
    buttons[2].addEventListener('click', () => rotateInput());
    buttons[3].addEventListener('click',() => getFromInput());
    function filterInput() {
        let str = document.getElementById('input').value;
        let secondaryCommandSelect = document.getElementById('filterSecondaryCmd');
        let secondaryCommand = secondaryCommandSelect.options[secondaryCommandSelect.selectedIndex].value;
        let position = +document.getElementById('filterPosition').value - 1;
        let currentResult = '';
        switch (secondaryCommand.toLowerCase()) {
            case 'uppercase':
                currentResult = str.split('').filter((char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)[position];
                break;
            case 'lowercase':
                currentResult = str.split('').filter((char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)[position];
                break;
            case 'nums':
                currentResult = str.split('').filter((char) => !isNaN(char))[position];
                break;
        }
        output.textContent = output.textContent + currentResult;
    }

    function sortInput() {
        let str = document.getElementById('input').value;
        let secondaryCommandSelect = document.getElementById('sortSecondaryCmd');
        let secondaryCommand = secondaryCommandSelect.options[secondaryCommandSelect.selectedIndex].value;
        let position = +document.getElementById('sortPosition').value - 1;
        let currentResult = '';
        console.log(secondaryCommand);
        switch (secondaryCommand) {
            case 'A':
                currentResult = str.split('').sort()[position];
                break;
            case 'Z':
                currentResult = str.split('').sort().reverse()[position];
                break;
        }

        output.textContent = output.textContent + currentResult;
    }

    function rotateInput() {
        let str = document.getElementById('input').value.split('');
        let rotationsCount = +document.getElementById('rotateSecondaryCmd').value;
        let position = +document.getElementById('rotatePosition').value - 1;
        for (let i = 0; i < rotationsCount; i++) {
            let lastElement = str.pop();
            str.unshift(lastElement);
        }
        output.textContent = output.textContent + str[position];
    }

    function getFromInput(){
        let str = document.getElementById('input').value.split('');
        let position = +document.getElementById('getPosition').value - 1;
        output.textContent = output.textContent + str[position];
    }
}

