function solve() {
    let delimer = document.getElementById('str').value;
    let string = document.getElementById('text').value;
    let messagePattern = `${delimer}(.+)${delimer}`;
    let messageRegex = new RegExp(messagePattern,'gmi');
    let messageMatch = messageRegex.exec(string)[1];
    let northRegex = /north.*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let northMatch = northRegex.exec(string.match(northRegex).reverse()[0]);
    let eastRegex = /east.*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let eastMatch = eastRegex.exec(string.match(eastRegex).reverse()[0]);

    let latitude = `${northMatch[1]}.${northMatch[2]} N`;
    let longitude  = `${eastMatch[1]}.${eastMatch[2]} E`;
    let message = `Message: ${messageMatch}`;

    let resultSpan = document.getElementById("result");

    let resultParagraph = document.createElement('p');
    let latitudeP = resultParagraph.cloneNode();
    latitudeP.textContent = latitude;
    let longtituteP = resultParagraph.cloneNode();
    longtituteP.textContent = longitude;
    let messageP = resultParagraph.cloneNode();
    messageP.textContent = message;

    resultSpan.appendChild(latitudeP);
    resultSpan.appendChild(longtituteP);
    resultSpan.appendChild(messageP);
}
