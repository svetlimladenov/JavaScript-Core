function binarySearch() {
    let input = document.getElementById("arr").value.split(", ");
    let num = document.getElementById("num").value;
    let resultSpan = document.getElementById("result");
    resultSpan.textContent = Array.from(input).indexOf(num) === - 1 ? resultSpan.textContent = num + " is not in the array" : "Found " + num + " at index " + Array.from(input).indexOf(num);
}