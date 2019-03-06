class Vacation  {
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
        this.kidsCount = 0;
    }

    registerChild(name, grade, budget){
        if (budget < this.budget){
            return `${name}\'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }
        if (this.kids[grade].includes(`${name}-${budget}`)){
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        this.kids[grade].push(`${name}-${budget}`);
        this.kidsCount++;
        return this.kids[grade];
    }

    removeChild(name, grade){
        if (!this.kids.hasOwnProperty(grade)){
            return `We couldn't find ${name} in ${grade} grade.`
        }
        let kidToRemove = this.kids[grade].find(x => x.split('-')[0] === name);
        if (kidToRemove !== undefined){
            let index = this.kids[grade].indexOf(kidToRemove);
            this.kids[grade].splice(index,1);
            this.kidsCount--;
            return this.kids[grade];
        }else{
            return `We couldn't find ${name} in ${grade} grade.`
        }
    }

    toString(){
        let result = '';
        if (this.kidsCount === 0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        result += `${this.organizer} will take ${this.kidsCount} children on trip to ${this.destination}\n`;
        let kids = this.kids;
        const ordered = {};
        Object.keys(kids).sort((a,b) => a - b).forEach(function(key) {
            ordered[key] = kids[key];
        });


        for(let grade in ordered) {
            result += `Grade: ${grade}\n`;
            for (let i = 0; i < ordered[grade].length; i++) {
                result += `${i + 1}. ${ordered[grade][i]}\n`;
            }
        }
        return result;
    }

    numberOfChildren(){
        return this.kidsCount;
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);
console.log(vacation.numberOfChildren());
console.log(vacation.toString());
