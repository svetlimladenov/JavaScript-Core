class LineManager{
    constructor(stops){
        stops.forEach(stop => {
            let stopName = stop.name;
            let timeToNext = stop.timeToNext;
            if (stopName === '' || isNaN(timeToNext) || timeToNext < 0){
                throw new Error('Invalid stop');
            }
        });
        this.stops = stops;
        this.delay = 0;
        this.currentStopIndex = 0;
        this.duration = 0;
    }

    get atDepot(){
        if(this.currentStopIndex >= this.stops.length - 1){
            return true;
        }
        return false;
    }

    get nextStopName(){
        if (this.currentStopIndex + 1 >= this.stops.length - 1){
            return 'At depot.';
        }
        return this.stops[this.currentStopIndex + 1].name;
    }

    get currentDelay(){
        return this.delay;
    }

    arriveAtStop(minutes){
        if (this.atDepot || minutes < 0){
            throw new Error('Invalid arrive at stop !');
        }
        let expectedTime = this.stops[this.currentStopIndex].timeToNext;
        this.delay += (minutes - expectedTime);

        this.currentStopIndex++;
        this.duration += minutes;

        return this.atDepot;
    };

    toString(){
        let result = 'Line summary\n';
        if (this.currentStopIndex + 1 > this.stops.length - 1){
            result += `- Course completed\n`;
        }else{
            let stop = this.stops[this.currentStopIndex + 1];
            let stopName = stop.name;
            result += `- Next stop: ${stopName}\n`;
        }
        result += `- Stops covered: ${this.currentStopIndex}\n`;
        result += `- Time on course: ${this.duration} minutes\n`;
        result += `- Delay: ${this.delay} minutes`;
        return result;
    }
}

let mgr = new LineManager([{name: 'depot', timeToNext: 1}]);
console.log(mgr.toString());

