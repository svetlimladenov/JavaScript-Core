function solve(){
    let lis = document.getElementsByTagName("li");
    document.querySelector("button").addEventListener('click', function () {
        let newName = document.querySelector("input").value;
        let alphabetPosition = newName.toString().toLowerCase().charCodeAt(0) - 97;
        if (alphabetPosition < 0 || alphabetPosition > 25){
            return;
        }
        if (lis[alphabetPosition].textContent === ""){
            lis[alphabetPosition].textContent += `${newName}`;
        }else{
            lis[alphabetPosition].textContent += `, ${newName}`;
        }
        document.querySelector("input").value = "";
    });
    console.log(lis.length);
}
