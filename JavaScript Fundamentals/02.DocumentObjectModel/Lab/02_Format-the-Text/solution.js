function solve(){
        let text = document.getElementById("input").textContent;
        let allSentances = text.split(".");
        let paragraphs = document.createElement("p");

        let outputDiv = document.getElementById("output");

        for (let i = 0; i <= allSentances.length; i++) {
            if ((i + 1) % 3 === 0){
                outputDiv.appendChild(paragraphs);
                paragraphs = document.createElement("p");
            }
            paragraphs.textContent += (allSentances[i] + ".");
        }
}
