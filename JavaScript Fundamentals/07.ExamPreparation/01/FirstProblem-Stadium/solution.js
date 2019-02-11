function solve() {
    let buttons = document.querySelectorAll('.seat');

    function getParentSection(element)
    {
        if (element.parentNode.tagName === 'SECTION')
        {
            return element.parentNode;
        }
        return getParentSection(element.parentNode);
    }

    let obj = {
        'Levski' : {
            'A' : 10,
            'B' : 7,
            'C' : 5,
        },
        'Litex' : {
            'A' : 10,
            'B' : 7,
            'C' : 5,
        },
        'VIP' : {
            'A' : 25,
            'B' : 15,
            'C' : 10,
        },
        'Results':{
            'Profit' : 0,
            'Fans' : 0,
        }
    };

    let outputDiv = document.querySelector('#output');

    Array.from(buttons).forEach(button => button.addEventListener('click', (e) => {
        let button = e.target;
        let section = getParentSection(button);
        let sector = section.className;
        let row = String.fromCharCode(button.parentNode.cellIndex + 65);
        if (button.style.backgroundColor === '') {
            button.style.backgroundColor = "rgb(255,0,0)";
            obj.Results.Fans ++;
            obj.Results.Profit += obj[sector][row];
            outputDiv.value += ` Seat ${button.textContent} in zone ${sector} sector ${row} was taken.\n`;
        }else{
            console.log('taken');
            outputDiv.value += ` Seat ${button.textContent} in zone ${sector} sector ${row} is unavailable.\n`;
        }
    }));

    document.querySelector('#summary button').addEventListener('click', () => {
        document.querySelector('span').textContent = `${obj.Results.Profit.toString()} leva, ${obj.Results.Fans.toString()} fans.`;
    });
}