function solve(input) {
    let listProcessor = (function () {
        let buffer = [];
        return {
            add : function (str) {
                buffer.push(str);
            },
            remove : function (str) {
                while (buffer.indexOf(str) >= 0){
                    let index = buffer.indexOf(str);
                    buffer.splice(index,1);
                }
            },
            print : function () {
                console.log(buffer.join(','));
            }
        }
    })();

    input.forEach(command => {
        let commandParts = command.split(' ');
        switch (commandParts[0]) {
            case 'add':
                listProcessor.add(commandParts[1]);
                break;
            case 'remove':
                listProcessor.remove(commandParts[1]);
                break;
            case 'print':
                listProcessor.print();
                break;
        }
    })
}

solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);