function solve(matrix, fullCommand) {
    let commandParts = fullCommand.split(' ');
    let command = commandParts[0];
    let headers = matrix[0].map(item => {
        return item;
    });
    switch (command) {
        case 'hide':
            let headerToHide = commandParts[1];
            let index = headers.indexOf(headerToHide);
            matrix.map((item) => {
                if (index > -1) {
                   return item.splice(index, 1);
                }
            });
            break;
        case 'sort':
             let headerToSortBy= commandParts[1];
             let indexToSortBy = headers.indexOf(headerToSortBy);
             let header = matrix.shift();
             matrix.sort((a,b) => sortFunction(a,b,indexToSortBy));
             matrix.unshift(header);
            break;
        case 'filter':
            let headerToFilterBy= commandParts[1];
            let value = commandParts[2];
            let indexToFilterBy = headers.indexOf(headerToFilterBy);
            let header1 = matrix.shift();
            matrix = matrix.filter(row => row[indexToFilterBy] === value);
            matrix.unshift(header1);
            break;
    }
    matrix.forEach(item => {
        console.log(item.join(' | '));
    });

    function sortFunction(a, b, index) {
        if (a[index] === b[index]) {
            return 0;
        }
        else {
            return (a[index] < b[index]) ? -1 : 1;
        }
    }
}

solve([['firstName', 'age', 'grade', 'course'],
        ['Peter', '25', '5.00', 'JS-Core'],
        ['George', '34', '6.00', 'Tech'],
        ['Marry', '28', '5.49', 'Ruby']],
    'filter firstName Marry'

);