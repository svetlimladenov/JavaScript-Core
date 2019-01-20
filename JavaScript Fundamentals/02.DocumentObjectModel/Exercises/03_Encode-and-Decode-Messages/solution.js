function solve() {
	let buttons = document.querySelectorAll("button");
	let textAreas = document.querySelectorAll("textarea");
	let encodeButton = buttons[0];
	let decodeButton = buttons[1];
    encodeButton.addEventListener('click', () => {
        let encodeTextarea = textAreas[0].value;
        if (!encodeTextarea){
            return;
        }
        let newString = "";
        for (let i = 0; i < encodeTextarea.length; i++) {
            newString += String.fromCharCode(encodeTextarea[i].toString().charCodeAt(0) + 1);
        }
        document.querySelectorAll("textarea")[0].value = "";
        textAreas[1].value = newString;
    });

    decodeButton.addEventListener('click', () => {
        let decodeTextarea = textAreas[1].value;
        if (!decodeTextarea){
            return;
        }
        let newString = "";
        for (let i = 0; i < decodeTextarea.length; i++) {
            newString += String.fromCharCode(decodeTextarea[i].toString().charCodeAt(0) - 1);
        }
        textAreas[1].value = newString;
    })
}