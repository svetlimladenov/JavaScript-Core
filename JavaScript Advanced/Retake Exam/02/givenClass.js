class AutoService {

    constructor(garageCapacity) {
        this.garageCapacity = garageCapacity;
        this.workInProgress = [];
        this.backlogWork = [];
    }

    get availableSpace() {
        return this.garageCapacity - this.workInProgress.length;
    }

    repairCar() {

        let workingPlace = this.workInProgress.length > 0 ? this.workInProgress : this.backlogWork;

        if (workingPlace.length > 0) {

            let keysForRepair = [];
            Object.keys(workingPlace[0].carInfo)
                .filter((k) => workingPlace[0].carInfo[k] === 'broken')
                .forEach((k) => keysForRepair.push(k));

            workingPlace.shift(); // remove first element
            if (keysForRepair.length > 0) {
                return `Your ${keysForRepair.join(' and ')} were repaired.`;
            } else {
                return 'Your car was fine, nothing was repaired.'
            }
        }
        else {
            return 'No clients, we are just chilling...'
        }
    }

    signUpForReview(clientName, plateNumber, carInfo) {

        let currentClient = {
            plateNumber,
            clientName,
            carInfo
        };

        if (this.availableSpace > 0) {
            this.workInProgress.push(currentClient);
        } else {
            this.backlogWork.push(currentClient);
        }
    }

    carInfo(plateNumber, clientName) {

        let checkCar =
            this.workInProgress.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0] ||
            this.backlogWork.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0];

        if (checkCar) {
            return checkCar;
        } else {
            return `There is no car with platenumber ${plateNumber} and owner ${clientName}.`;
        }
    }
}

//TODO: Change the Warehouse class with the given class and do the tests, GO GO GO GO !

const assert = require('chai').assert;

describe("Getters", function () {
    it('availableSpace', function () {
        let vianor = new AutoService(10);
        assert.equal(vianor.availableSpace, 10);
    });

    it('availableSpace with one car in it', function () {
        let vianor = new AutoService(10);
        vianor.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        assert.equal(vianor.availableSpace, 9);
    });
    it('no avaivable space', function () {
        let vianor = new AutoService(1);
        vianor.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        vianor.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        assert.equal(vianor.availableSpace, 0);
    });
});

describe("signupForReview", function () {
    it('shold singup cars', function () {
        let autoService = new AutoService(10);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});

        assert.equal(autoService.workInProgress.length,3);
        assert.equal(autoService.backlogWork.length,0);
    });
    it('backlogWork', function () {
        let autoService = new AutoService(2);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});

        assert.equal(autoService.backlogWork.length,1);
    });
});

describe("carInfo", function () {
    it('should show car info correct', function () {
        let autoService = new AutoService(10);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        let act = autoService.carInfo('CA1234CA','Peter');
        assert.equal(act.carInfo.transmission,'FF4418ZZ');
    });

    it('should return message for incorect car', function () {
        let autoService = new AutoService(10);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        assert.equal(autoService.carInfo('CA1234KH','Ivan'),`There is no car with platenumber CA1234KH and owner Ivan.`)
    });

    it('should return message for incorect car', function () {
        let autoService = new AutoService(10);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        assert.equal(autoService.carInfo('CA1234CA','Ivan'),`There is no car with platenumber CA1234CA and owner Ivan.`)
    });
    it('should return message for backlog cars', function () {
        let autoService = new AutoService(1);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Peter', 'KH1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        let exptected = {
            "carInfo": {
                "doors": "broken",
                "engine": "MFRGG23",
                "transmission": "FF4418ZZ",
            },
            "clientName": "Peter",
            "plateNumber": "KH1234CA"
        };
        assert.deepEqual(autoService.carInfo('KH1234CA','Peter'),exptected);
    });
});

describe('should throw', function () {
    it('should find place to throw', function () {
        let autoService = new AutoService(4);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        assert.equal(autoService.workInProgress[0].clientName,'Peter');
    });
});

describe('Repair cars', function () {
    it('should repair cars in progess', function () {
        let autoService = new AutoService(10);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
        assert.equal(autoService.repairCar(),'Your doors were repaired.');
    });

    it('should repair cars in progess with many problems', function () {
        let autoService = new AutoService(10);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
        autoService.repairCar();
        assert.equal(autoService.repairCar(),'Your doors and wheels and tires were repaired.');
    });
    it('should repair cars in backlog', function () {
        let autoService = new AutoService(2);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'broken'});
        autoService.repairCar();
        autoService.repairCar();
        assert.equal(autoService.repairCar(),'Your exaustPipe were repaired.');
    });

    it('car fine', function () {
        let autoService = new AutoService(10);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'cool'});
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
        assert.equal(autoService.repairCar(),'Your car was fine, nothing was repaired.');
    });

    it('should chill when finished', function () {
        let autoService = new AutoService(10);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'cool'});
        autoService.repairCar();
        assert.equal(autoService.repairCar(),'No clients, we are just chilling...');
    });

    it('should chill', function () {
        let vianor = new AutoService(10);
        assert.equal(vianor.repairCar(),'No clients, we are just chilling...');
    });
});