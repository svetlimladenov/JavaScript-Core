function solve() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let firstString = document.getElementById('firstString').value;
    let secondString = document.getElementById('secondString').value;
    let thirdString = document.getElementById('thirdString').value;
    let allStrings = [firstString,secondString,thirdString];


    for (let i = firstNumber; i <= secondNumber; i++) {
        let p = document.createElement("p");

        p.textContent = i % 5 === 0 && i % 3 === 0 ? i + " " + allStrings.join('-')
            : i % 3 === 0 ? i + " " + secondString
            : i % 5 === 0 ? i + " " + thirdString
            : i.toString();
            /*  if (i % 5 === 0 && i % 3 === 0){
                  p.textContent = i + " " + allStrings.join('-');
              }else if(i % 3 === 0){
                  p.textContent = i + " " + secondString;
              }else if(i % 5 === 0){
                  p.textContent = i + " " + thirdString;
              }else{
                  p.textContent = i.toString();
              }*/
        document.getElementById('result').appendChild(p);
    }
}