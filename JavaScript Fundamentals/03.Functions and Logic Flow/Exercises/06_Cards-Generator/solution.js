(function () {
    function solve() {
        let cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let output = document.getElementById('cards');
        document.querySelector('button').addEventListener('click', function () {
            let from = document.getElementById('from').value;
            let to = document.getElementById('to').value;
            let select = document.querySelector('select');
            let paint = select.options[select.selectedIndex].value.toString().split(' ')[1];
            console.log(paint);
            let fromIndex = cards.indexOf(from.toUpperCase());
            let toIndex = cards.indexOf(to.toUpperCase());
            for (let i = fromIndex; i <= toIndex; i++) {
                let div = document.createElement('div');
                div.classList.add('card');
                let suitPaintUp = document.createElement('p');
                suitPaintUp.textContent = paint;
                let suitPaintDown = document.createElement('p');
                suitPaintDown.textContent = paint;
                let cardValue = document.createElement('p');
                cardValue.textContent = cards[i];
                div.appendChild(suitPaintUp);
                div.appendChild(cardValue);
                div.appendChild(suitPaintDown);
                output.appendChild(div);
            }
        })
    }
    return function () {
        return solve();
    }
})();