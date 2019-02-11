function solve() {
    let obj = {
        'trucks' : {},
        '_backupTyres' : [],
    };
    let fieldsets = document.querySelectorAll('fieldset');
    let trucksHolder = fieldsets[4].lastElementChild;
    let backUpTyresHolder = fieldsets[3].lastElementChild;
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', () => addNewTruck());
    buttons[1].addEventListener('click', () => addNewBackupTyres());
    buttons[2].addEventListener('click', () => goToWork());
    buttons[3].addEventListener('click', () => endOfShift());
    function addNewTruck() {
        let plateNmber = document.getElementById('newTruckPlateNumber').value;
        let tyreSet = document.getElementById('newTruckTiresCondition').value.split(' ').map(Number);
        if (!obj['trucks'].hasOwnProperty(plateNmber)){
            obj['trucks'][plateNmber] = {
                'tyreSet' : tyreSet,
                'distance' : 0
            };
            let newTruckDiv = document.createElement('div');
            newTruckDiv.textContent = plateNmber;
            newTruckDiv.classList.add('truck');
            trucksHolder.appendChild(newTruckDiv);
        }

    }

    function addNewBackupTyres() {
        let tyresSet = document.getElementById('newTiresCondition').value.split(' ').map(Number);
        obj._backupTyres.push(tyresSet);
        let newTyresDiv = document.createElement('div');
        newTyresDiv.textContent = tyresSet.join(' ');
        newTyresDiv.classList.add('tireSet');
        backUpTyresHolder.appendChild(newTyresDiv);
    }

    function goToWork() {
        let truck = obj['trucks'][document.getElementById('workPlateNumber').value];
        let distance = (+document.getElementById('distance').value) / 1000;
        console.log(obj._backupTyres.some(x => x));
        if (areTyresGoodEnough(truck.tyreSet,distance) === true){
            truck.tyreSet = truck.tyreSet.map(x => x - distance);
            truck.distance += distance * 1000;
        }else if(obj._backupTyres.some(x => x) && areTyresGoodEnough(obj._backupTyres[0],distance)){
            let changedTyres = obj._backupTyres.shift();
            backUpTyresHolder.removeChild(backUpTyresHolder.childNodes[0]);
            truck.tyreSet = changedTyres;
            truck.tyreSet = truck.tyreSet.map(x => x - distance);
            truck.distance += distance * 1000;
        }
    }

    function areTyresGoodEnough(tyres, distance) {
        let drivenTyres = tyres.map(tyre => tyre - distance);
        console.log(!drivenTyres.some(tyre => tyre < 0));
        return !drivenTyres.some(tyre => tyre < 0);
    }

    function endOfShift() {
        let textarea = document.querySelector('textarea');

        for (let trucksKey in obj.trucks) {
            textarea.value += `Truck ${trucksKey} has traveled ${obj['trucks'][trucksKey].distance}.\n`
        }

        textarea.value += `You have ${obj._backupTyres.length} sets of tires left.\n`
    }
}