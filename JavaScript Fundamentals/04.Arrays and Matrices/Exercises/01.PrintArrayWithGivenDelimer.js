function PrintArrayWithDeliver(input) {
    let array = input;
    let delimer = array[array.length - 1];
    let result = "";
    for (let i = 0; i < array.length - 1; i++) {
        if (i === 0){
            result += array[i];
            continue;
        }
        result += delimer + array[i];
    }
    console.log(result);
}

PrintArrayWithDeliver(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']
);