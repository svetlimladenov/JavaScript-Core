let regexPatern = /\w+/g;
let text = 'lorem ipusim 12 as';
let result = regexPatern.exec(text);
let m;
do {
    m = regexPatern.exec(text);
    if (m) {
        console.log(m[1], m[2]);
    }
} while (m);