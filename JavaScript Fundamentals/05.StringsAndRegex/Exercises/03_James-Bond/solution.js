function solve() {
    let input = JSON.parse(document.getElementById('arr').value);
    let encode = input[0];
    let message = '';
    for (let i = 1; i < input.length; i++) {
        message+= input[i] + ' ';
    }

    let regexPattern = `${encode}\\s*([A-Z!%$#]{8,})[\\s.,^]`;
    let regex = new RegExp(regexPattern,'gmi');
    let matches = message.match(regex);

    let matchesWithGroups = [];
    function hasLowerCase(str) {
        return str.toUpperCase() !== str;
    }
    for (let i = 0; i < matches.length; i++) {
        let currentMatch = regex.exec(matches[i] + ' ');
        regex.test(matches[i]);
        matchesWithGroups.push(currentMatch);
    }
    matchesWithGroups = matchesWithGroups.filter(match => !hasLowerCase(match[1]));
    let onlyMessages = matchesWithGroups.map(match => match[1]);
    let encodedMatches = onlyMessages.map(match => {
        return match.split('').map(letter => {
            switch (letter) {
                case '!':
                    return 1;
                case '%':
                    return 2;
                case '#':
                    return 3;
                case '$':
                    return 4;
                default :
                    return letter.toLowerCase();
            }
        }).join('');
    });

    matchesWithGroups.map(match => match[0]).forEach((match,index) => {
        message = message.replace(match, encodedMatches[index] + ' ');
    });

    let result = document.createElement('p');
    result.textContent = message.trim();
    document.querySelector('#result').appendChild(result);
}