function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (startIndex < 0)
    {
        startIndex = 0;
    }
    let cuttedArr = arr.slice(startIndex,endIndex + 1);
    cuttedArr.map(Number);
    if (cuttedArr.length === 0)
    {
        return 0;
    }
    let sum = cuttedArr.reduce((a, b) => a + b);
    if (isNaN(sum))
    {
        return NaN;
    }

    return sum;
}

module.exports = subsum;

subsum([10, 20, 30, 40, 50, 60], 3, 300);
subsum([10, 'twenty', 30, 40], 0, 2);
subsum('text', 0, 2);
subsum([], 1, 2);
subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
