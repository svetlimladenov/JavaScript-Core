// function processor() {
//     let myStr = '';
//
//     return {
//         append : (str) => {myStr += str},
//         removeStart : (n) => {myStr = myStr.slice(n)},
//         removeEnd : (n) => {myStr = myStr.slice(0,myStr.length - n)},
//         print : () => {console.log(myStr)},
//     }
// }
//
// const myProc = processor();
// myProc.append('jail');
// myProc.append('help');
// myProc.removeEnd(4);
// myProc.print();
//
// const secondProc = processor();
// secondProc.append('prison');
// secondProc.print();

const operarations = {
    current: "",
    append : function(str) {
        this.current += str;
        return this;
    },
    removeStart : function(num){
        this.current = this.current.slice(num);
        return this;
    },
    removeEnd : function(num){
        this.current = this.current.slice(0, this.current.length - num);
        return this;
    },
    print : function(){
        console.log(this.current);
        return this;
    },
    execute : function(input)  {
        input.forEach((el) => {
            const parts = el.split(' ');
            this[parts[0]].call(this, parts[1]);
        })
    }
};

const input = ['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'];


operarations.execute(input);