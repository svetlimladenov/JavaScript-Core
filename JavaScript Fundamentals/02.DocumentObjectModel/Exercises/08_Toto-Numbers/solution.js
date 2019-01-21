function solve() {
	document.querySelector("button").addEventListener("click", function () {
        let inputNumbers = document.querySelector("input").value.split(" ");
        console.log(inputNumbers.length);
        if (inputNumbers.length !== 6){
            return;
        }
        for (let i = 1; i <= 49; i++) {
            let currentDiv = document.createElement("div");
            currentDiv.textContent = i.toString();
            currentDiv.classList.add("numbers");
            for (let j = 0; j < inputNumbers.length; j++) {
                if (+inputNumbers[j] === i)
                {
                    currentDiv.style.backgroundColor = "orange";
                }
            }
            document.querySelector("#allNumbers").appendChild(currentDiv);
        }
        document.querySelector("input").setAttribute("disabled", "");
        document.querySelector("button").setAttribute("disabled", "");
    })
}