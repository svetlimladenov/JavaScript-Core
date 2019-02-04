function solve() {
    let resultSpan = document.getElementById("result");

    let input = JSON.parse(document.getElementById("arr").value);
    let word = document.getElementById("str").value;

    let wordToReplaceWith = input[0].split(" ")[2].toString();

    let pattern = new RegExp(wordToReplaceWith, "i");

    input.forEach((element) => {
        element = element.replace(pattern, word.toString());
        let paragraph = document.createElement("p");
        paragraph.textContent = element;
        resultSpan.appendChild(paragraph);
    });
}