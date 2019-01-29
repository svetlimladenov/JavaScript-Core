function solve() {
  document.getElementById('result').textContent = JSON.parse(document.getElementById('arr').value).filter((value, index) => index % 2 === 0).join(' x ');
}