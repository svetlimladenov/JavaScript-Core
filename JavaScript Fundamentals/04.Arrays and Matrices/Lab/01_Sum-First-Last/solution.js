function solve() {
  function getOutput(array) {
      let result = document.getElementById('result');
      for (let i = 0; i < array.length; i++) {
          let p = document.createElement('p');
          p.textContent = i + " -> " + array[i] * array.length;
          result.appendChild(p);
      }
  }
  let arr = JSON.parse(document.getElementById('arr').value);
  getOutput(arr);
}