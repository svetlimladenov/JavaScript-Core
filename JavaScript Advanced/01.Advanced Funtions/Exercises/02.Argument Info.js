function solve() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);
        if (!summary[type]){
            summary[type] = 0;
        }
        summary[type] ++;
    }
    let sortedSummary = [];
    for (let type in summary) {
        sortedSummary.push([type,summary[type]]);
    }
    sortedSummary = sortedSummary.sort((a,b) => {
        return b[1] - a[1];
    });
    sortedSummary.forEach(x => console.log(`${x[0]} = ${x[1]}`));
}

solve('cat', 42, 33,function () { console.log('Hello world!'); });