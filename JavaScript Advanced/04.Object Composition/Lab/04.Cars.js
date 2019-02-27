function solve(input) {
    let carModifier = (function () {
        let cars = [];

        return {
            create : (name) => {
                let newCar = { name : name};
                cars.push(newCar);
            },
            createInherit : (name, parentName) => {
                let parentCar = cars.find(p => p.name === parentName);
                let newCar = Object.create(parentCar);
                newCar.name = name;
                cars.push(newCar);
            },
            set : (carName, key, value) => {
                let currentCar = cars.find(p => p.name === carName);
                currentCar[key] = value;
            },
            print : (carName) => {
                let currentCar = cars.find(p => p.name === carName);
                let result = [];
                for(let propertyName in currentCar) {
                    if (propertyName === 'name'){
                        continue;
                    }
                    result.push(`${propertyName}:${currentCar[propertyName]}`);
                }
                console.log(result.join(', '));
            }
        }
    })();

    input.forEach(command => {
        const commandParts = command.split(' ');
        let commandName = commandParts[0];
        if (commandName === 'create' && commandParts.length === 4) {
            commandName = 'createInherit';
        }
        switch (commandName) {
            case 'create':
                carModifier.create(commandParts[1]);
                break;
            case 'createInherit':
                let parentName = commandParts[3];
                carModifier.createInherit(commandParts[1],parentName);
                break;
            case 'set':
                carModifier.set(commandParts[1],commandParts[2],commandParts[3]);
                break;
            case 'print':
                carModifier.print(commandParts[1]);
                break;
        }
    })
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);
