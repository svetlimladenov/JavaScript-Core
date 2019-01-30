function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add')
        {
            result.push(i + 1);
        }else{
            result.pop();
        }
    }
    if (result.length === 0) result.push('Empty');
    console.log(result.join('\r\n'));
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);