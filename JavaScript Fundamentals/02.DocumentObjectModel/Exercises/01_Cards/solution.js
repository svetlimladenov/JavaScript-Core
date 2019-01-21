function solve() {
    let spans = document.querySelectorAll("span");
    Array.from(document.querySelectorAll("#player1Div img")).forEach(card => {
        card.addEventListener("click", () => {
            card.src = "images/whiteCard.jpg";
            spans[0].textContent = card.getAttribute("name");
            if (spans[2].textContent)
            {
                Fight(spans[0],spans[2]);
                card.removeEventListener('click');
            }
        })
    });

    Array.from(document.querySelectorAll("#player2Div img")).forEach(card => {
        card.addEventListener("click", () => {
            card.src = "images/whiteCard.jpg";
            spans[2].textContent = card.getAttribute("name");
            if (spans[0].textContent)
            {
                Fight(spans[0],spans[2]);
                card.removeEventListener('click');
            }
        })
    });

    function Fight(card1, card2) {
        let card1Value = +card1.textContent;
        let card2Value = +card2.textContent;
        let biggestValue = Math.max(card1Value,card2Value);
        let winnerSelector = 'img[name="'+ biggestValue.toString() +'"]';
        document.querySelectorAll(winnerSelector)[0].style.border = "2px solid green";

        let smallestValue = Math.min(card1Value,card2Value);
        let looserSelector = 'img[name="'+ smallestValue.toString() +'"]';
        document.querySelectorAll(looserSelector)[0].style.border = "2px solid darkred";

        setTimeout(() => {
            spans[0].textContent = "";
            spans[2].textContent = "";
        }, 2000);

        let history = document.querySelector("#history");
        history.textContent += "[" + spans[0].textContent + " vs " + spans[2].textContent + "] ";
    }
}