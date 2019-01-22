function solve() {
  let string = document.getElementById("string").value;
  let char = document.getElementById("character").value;

  let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char){
            count++;
        }
    }
    console.log(count);

    function GetResult(count){

        if (count % 2 === 0){
            return "even";
        }else{
            return "odd";
        }
    }

    document.getElementById("result").textContent = `Count of ${char} is ${GetResult(count)}.`;
}