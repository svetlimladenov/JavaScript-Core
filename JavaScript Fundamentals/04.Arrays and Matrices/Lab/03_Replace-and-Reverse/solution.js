function solve() {
    let array = JSON.parse(document.querySelector('#arr').value);
    function ReverseWord(word) {
        let reversedWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        return reversedWord.toString().charAt(0).toUpperCase() + reversedWord.slice(1);
    }
    let sentence = "";
    array.forEach(element => sentence += (ReverseWord(element) + " "));
    document.getElementById('result').textContent = sentence.trim();
}