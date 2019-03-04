(() => {
    String.prototype.ensureStart = function (str) {
        const currentStr = this.valueOf();
        if (currentStr.indexOf(str) === 0){
            return currentStr;
        }

        return str + currentStr;
    };

    String.prototype.ensureEnd = function (str) {
        const currentStr = this.valueOf();
        if (currentStr.endsWith(str)){
            return currentStr;
        }

        return currentStr + str;
    };

    String.prototype.isEmpty  = function () {
        return this.valueOf().length === 0;
    };

    String.prototype.truncate = function (n) {
        const currentStr = this.valueOf();
        if (n >= currentStr.length){
            return currentStr;
        }
        if (n + 3 < 4)
        {
            return '.'.repeat(n);
        }

        let splitedStr = currentStr.split(' ');
        if (splitedStr.length > 1) {
            let lastPart = splitedStr.pop();
            let newLenght = splitedStr.join(' ').length;
            while (newLenght + 3 > n){
                splitedStr.pop();
                newLenght = splitedStr.join(' ').length;
            }
            let dots = 3;
            let dotChar = '.';
            return splitedStr.join(' ') + dotChar.repeat(dots);
        }else{
            let lastStringPartLeft = splitedStr[0];
            let returnValue = lastStringPartLeft.slice(0,n - 3);
            returnValue = returnValue + '.'.repeat(3);
            return returnValue;
        }
    };

    String.format = function(string){
        let tempStr = string;
        let tempArguments = arguments;
        let tempParameters = Array.from(tempArguments).slice(1, Array.from(tempArguments).length);

        Array.from(tempParameters).forEach((p, index) => {
            let parameter = "{" + index.toString() + "}";
            if(tempStr.includes(parameter)){
                tempStr = tempStr.replace(parameter, p);
            }
        });

        return tempStr;
    }
})();

// let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// console.log(str);

var testString = 'the quick brown fox jumps over the lazy dog';

testString = testString.truncate(10);
console.log(testString);