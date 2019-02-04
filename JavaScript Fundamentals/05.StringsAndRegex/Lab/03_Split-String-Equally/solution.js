function solve() {
    let string = document.getElementById('str').value;
    console.log(string);
    let n = document.getElementById('num').value;
    let pattern = `.{1,${n}}`;
    let regex = new RegExp(pattern,'g');
    let result = string.match(regex);
    console.log(result[result.length - 1].length);
    if (result[result.length - 1].length.toString() !== n)
    {
        let lastElement = result.pop().split('');

        let currentIndex = 0;
        while (lastElement.length < n){
            if (currentIndex === string.length - 1){
                currentIndex = 0;
            }
            lastElement.push(string[currentIndex]);
            currentIndex++;
        }
        result.push(lastElement.join(''));
    }
    document.getElementById('result').textContent = result.join(' ');
}