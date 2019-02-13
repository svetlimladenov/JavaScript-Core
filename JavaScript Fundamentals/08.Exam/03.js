function solve(input) {
    let result = [];
    let regex = /^<([^ *]+?)>(.+)<\/(\1)>$/gm;
    input.forEach(x => {
        if (regex.test(x)){
            regex.exec(x);
            let text = findInnerText(regex.exec(x))[2];
            text = findInnerText(text);
            result.push(text);
        }
    });

    console.log(result.join(' '));
    function findInnerText(textInput) {
        if (!regex.test(textInput))
        {
            return textInput;
        }
        regex.exec(textInput);
        let innerText = findInnerText(regex.exec(textInput))[2];
        return findInnerText(innerText);
    }
}

solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']
);