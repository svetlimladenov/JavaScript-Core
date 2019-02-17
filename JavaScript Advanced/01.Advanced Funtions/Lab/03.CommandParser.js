function processor() {
    let myStr = '';
    
    return {
        append : (str) => {myStr += str},
        removeStart : (n) => {myStr = myStr.slice(n)},
        removeEnd : (n) => {myStr = myStr.slice(0,myStr.length - n)},
        print : () => {console.log(myStr)},
    }
}

const myProc = processor();
myProc.append('jail');
myProc.append('help');
myProc.removeEnd(4);
myProc.print();

const secondProc = processor();
secondProc.append('prison');
secondProc.print();