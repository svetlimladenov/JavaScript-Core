function solve() {
  let string = document.getElementById('string').value.split('');
  let uniqueChars = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " "){
            uniqueChars += string[i];
            continue;
        }
        IsUniqueCharacter(string, string[i]);
    }
    function IsUniqueCharacter(string, char) {
        if (uniqueChars.indexOf(char) === -1){
            uniqueChars += char;
        }
    }
    document.getElementById('result').textContent = uniqueChars;
}