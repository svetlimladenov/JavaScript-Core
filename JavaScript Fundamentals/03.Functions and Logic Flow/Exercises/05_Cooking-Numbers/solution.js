(function () {
    function solve() {
        let result = 0;
        let btnClicksCounter = 0;
        Array.from(document.querySelectorAll('button')).forEach((button) => {
            button.addEventListener('click', () => {
                btnClicksCounter++;
                let currentBtnText = button.textContent;
                let inputNumber = document.querySelector('input').value;
                if (!inputNumber){
                    inputNumber = 0;
                }
                if (btnClicksCounter === 1){
                    result = inputNumber;
                }
                console.log(result);
                switch (currentBtnText.toLowerCase()) {
                    case 'chop':
                        result /= 2;
                        break;
                    case 'dice':
                        result = Math.sqrt(result);
                        break;
                    case 'spice':
                        result++;
                        break;
                    case 'bake':
                        result *= 3;
                        break;
                    case 'fillet':
                        result *= 0.80;
                        break;
                }
                document.getElementById('output').textContent = result.toString();
            })
        })
    }
    return function () {
        solve();
    }
})();