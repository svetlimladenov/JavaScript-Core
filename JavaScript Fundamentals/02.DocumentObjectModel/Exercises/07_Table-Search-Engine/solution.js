function solve() {
    document.querySelector("#searchBtn").addEventListener('click', () => Search());

    function Search(){
        let searchWord = document.querySelector("#searchField").value;
        let tds = document.querySelectorAll("tbody td");
        for (let i = 0; i < tds.length; i++){
            tds[i].parentElement.classList.remove("select");
        }

        for (let i = 0; i < tds.length; i++) {
            if (tds[i].textContent.toString().toLowerCase().includes(searchWord.toLowerCase())){
                tds[i].parentElement.classList.add("select");
            }
        }
        document.querySelector("#searchField").value = "";
    }
}