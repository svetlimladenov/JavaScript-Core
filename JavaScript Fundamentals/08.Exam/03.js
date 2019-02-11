//chech for tag in tag
//.test while false
function solve(input) {
    let result = [];
    let regex = /^<([^ *]+?)>(.+)<\/(\1)>$/gm;
    input.forEach(x => {
        if (regex.test(x)){
            let a = regex.exec(x);
            let text = findInnertText(regex.exec(x))[2];
            text = findInnertText(text);
            result.push(text);
        }
    });

    console.log(result.join(' '));
    function findInnertText(textInput) {
        if (!regex.test(textInput))
        {
            return textInput;
        }
        regex.exec(textInput);
        let innerText = findInnertText(regex.exec(textInput))[2];
        return findInnertText(innerText);
    }
}

solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']

);