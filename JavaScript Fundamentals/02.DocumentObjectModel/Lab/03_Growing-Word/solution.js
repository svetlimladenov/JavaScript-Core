function solve() {
    document.querySelector("#exercise button").addEventListener('click', () => OnClick());
    let timeClicked = 0;
    let colorNumber = 0;
    let colorArr = ["blue", "green", "red"];
    function OnClick() {
        timeClicked++;
        let paragraph = document.querySelector("#exercise p");
        let fontSize = timeClicked * 2;
        paragraph.style.fontSize = fontSize + "px";
        if (colorNumber > colorArr.length){
            colorNumber = 0;
        }

        paragraph.style.color = colorArr[colorNumber];
        colorNumber++;
    }
}