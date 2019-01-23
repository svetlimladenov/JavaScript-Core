(function () {
    function solve() {
        let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6]; //54
        let response = document.getElementById('response');
        document.querySelector('button').addEventListener('click', () => {
            let input = document.querySelector('input').value;
            let sum = 0;
            let isValid = true;
            function GetWeight() {
                for (let i = 0; i < input.length; i++) {
                    if (Number(input[i]) < 0 || Number(input[i]) > 9){
                        isValid = false;
                    }

                    if(i + 1 === 10){
                        break;
                    }
                    let currentNum = Number(input[i]);
                    console.log(currentNum);
                    let currentWeight = Number(weightPosition[i]);
                    console.log(currentWeight);
                    sum += currentNum * currentWeight;
                }
            }
            GetWeight();
            let remainder = (sum % 11);
            if(((remainder) % 10) === 0){
                remainder = 0;
            }
            console.log(isValid);
            if((+remainder === +input[9]) && (isValid)){
                response.textContent = "This number is Valid!";
            } else {
                response.textContent = "This number is NOT Valid!";
            }
        });
    }
    return function() {
        solve();
    }
})();