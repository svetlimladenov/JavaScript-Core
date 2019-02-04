function solve() {
    let input = JSON.parse(document.getElementById('arr').value);
    let result = document.getElementById('result');
    let paragraphElement = document.createElement('p');
    let invalidDataParagraph = paragraphElement.cloneNode();
    invalidDataParagraph.textContent = 'Invalid data';
    let dashDelimer = paragraphElement.cloneNode();
    dashDelimer.textContent = '- - -';
    let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359(?: \d \d{3} \d{3}|-\d-\d{3}-\d{3})) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/g;
    input.forEach((element) => {
        let match = pattern.exec(element);
        if (match){
            insertValidElement(`Name: ${match[1]}`);
            insertValidElement(`Phone Number: ${match[2]}`);
            insertValidElement(`Email: ${match[3]}`);
        }else{
            result.appendChild(invalidDataParagraph.cloneNode(true))
        }
        result.appendChild(dashDelimer.cloneNode(true));
    });

    function insertValidElement(text) {
        let validElement = paragraphElement.cloneNode();
        validElement.textContent = text;
        result.appendChild(validElement);
    }
}
