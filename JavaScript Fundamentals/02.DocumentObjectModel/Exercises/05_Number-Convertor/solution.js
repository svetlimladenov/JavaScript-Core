function solve() {
    let selectMenu = document.getElementById("selectMenuTo");

    let hexaOption = document.createElement("option");
    hexaOption.value = "hexadecimal";
    hexaOption.textContent = "Hexadecimal";

    selectMenu.appendChild(hexaOption);

    let binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.textContent = "Binary";

    selectMenu.appendChild(binaryOption);

    document.querySelector("button").addEventListener('click', function () {
        let inputNumber = document.querySelectorAll("input")[0].value;
        let convertTo = +selectMenu.selectedIndex;
        let result = document.querySelectorAll("input")[1];
        if (convertTo === 1){
            console.log(inputNumber);
            let decimalNumber = Number(inputNumber);
            result.value = decimalNumber.toString(16).toUpperCase();
        } else {
            let bin = (+inputNumber).toString(2);
            result.value = bin;
        }
    })
}