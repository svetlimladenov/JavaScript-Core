class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = destination;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}\'s money is not enough to go on vacation to ${this.destination}.`
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        if (this.kids[grade].includes(`${name}-${budget}`)) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }

        this.kids[grade].push(`${name}-${budget}`);
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
            return this.kids[grade];
        }else{
            return `We couldn't find ${name} in ${grade} grade.`
        }
    }

    toString(){
        let output = '';
        let childerenCount = Object.values(this.kids).reduce((previousValue, currentValue) => {
            return previousValue + currentValue.length;
        },0);

        output += `${this.organizer} will take ${childerenCount} children on trip to ${this.destination}\n`;

        const kidsByGrade = {};
        Object.keys(this.kids).sort((a,b) => a - b).forEach((grade) => {
            kidsByGrade[grade] = this.kids[grade];
        });

        for (let grade in kidsByGrade){
            output += `Grade: ${grade}\n`;
            kidsByGrade[grade].forEach((kid,i) => {
                output+= `${i + 1}. ${kid}\n`;
            });
        }

        return output;
    }
}

let borovo = new Vacation('Ivan', 'Ranenci', 1000);
borovo.registerChild('Svetlin', 12, 1400);
borovo.registerChild('Pesho', 10, 1400);
borovo.registerChild('Goshe', 12, 1200);
borovo.registerChild('Ivan', 2, 1200);
borovo.removeChild('Ivan',12);
console.log(borovo.toString());