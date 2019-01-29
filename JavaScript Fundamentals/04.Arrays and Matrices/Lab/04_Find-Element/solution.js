function solve() {
    let number = document.getElementById('num').value;
    let array = JSON.parse(document.getElementById('arr').value);
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let currentSearchTarget = array[i];
        if (currentSearchTarget.toString().indexOf(number) === -1){
            result.push("false -> -1")
        }else{
            result.push("true -> " + currentSearchTarget.toString().indexOf(number));
        }
    }
    document.getElementById('result').textContent = result.join(',');
}