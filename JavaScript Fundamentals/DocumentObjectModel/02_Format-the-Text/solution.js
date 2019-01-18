function solve(){
    let text = document.getElementById("input").innerText;
    let allSentances = text.split(".");
     
    let paragraphs = [];
    let currentSection = 0;
    for (let i = 0; i < allSentances.length; i++) {
        if (allSentances[i].length < 0){
            i--;
        }
        if ((i + 1) % 3 === 0)
        {
            console.log("new paragraph");
            currentSection++;
        }
        if (allSentances[i].length < 0){
            i++;
        }

        paragraphs[currentSection] += allSentances[i];
    }

    for (let i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i]);
        console.log("==========");
    }
}