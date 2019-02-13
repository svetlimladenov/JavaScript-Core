function solve(obj) {
    let townsWithVignetteProfit = {};
    obj.forEach(x => {
        if (!townsWithVignetteProfit.hasOwnProperty(x.town))
        {
            townsWithVignetteProfit[x.town] = 0;
            townsWithVignetteProfit[x.town] += x.price;
        }else{
            townsWithVignetteProfit[x.town] += x.price;
        }
    });
    let biggestProfitWithTown = '';
    let biggestProfitNum = 0;
    let mostProfitableTown = '';
    const ordered = {};
    Object.keys(townsWithVignetteProfit).sort().forEach(function(key) {
        ordered[key] = townsWithVignetteProfit[key];
    });
    for (let key in ordered) {
        let obj = ordered[key];
            if (obj > biggestProfitNum)
            {
                biggestProfitNum = Number(obj);
                mostProfitableTown = key;
                biggestProfitWithTown = `${key} is most profitable - ${obj} BGN`;
            }
    }
    console.log(biggestProfitWithTown);
    let carsInBiggestCity = {};
    obj.forEach(row => {
        if (row.town === mostProfitableTown)
        {
            if (!carsInBiggestCity.hasOwnProperty(row.model))
            {
                carsInBiggestCity[row.model] = 1;
            }else{
                carsInBiggestCity[row.model]++;
            }
        }
    });
    let sortable = [];
    for (let vehicle in carsInBiggestCity) {
        sortable.push([vehicle, carsInBiggestCity[vehicle]]);
    }

    sortable = sortable.sort(function(a, b) {
        if(a[1] < b[1]){
            return 1;
        }else if(a[1] > b[1]){
            return -1;
        }else{
            let tempA = Object.values(obj).filter(x => x.model === a[0] && x.town === mostProfitableTown)[0].price;
            let tempB = Object.values(obj).filter(x => x.model === b[0] && x.town === mostProfitableTown)[0].price;
            if (tempA < tempB)
            {
                return 1;
            }else if(tempA > tempB)
            {
                return -1;
            }else{
                let tempA = Object.values(obj).filter(x => x.model === a[0] && x.town === mostProfitableTown)[0].model;
                let tempB = Object.values(obj).filter(x => x.model === b[0] && x.town === mostProfitableTown)[0].model;
                if (tempA < tempB)
                {
                    return -1;
                }else{
                    return 1;
                }
            }
        }
    });
    let mostPopularCar = sortable[0][0];

    let towns = [];
    for (let line in obj) {
        if(obj[line].model === mostPopularCar){
            towns.push(obj[line]);
        }
    }
    let townsWithCars = {};
    towns.forEach(town => {
        if (!townsWithCars.hasOwnProperty(town.town))
        {
            townsWithCars[town.town] = { plateNumbers : [] };
        }
        townsWithCars[town.town].plateNumbers.push(town.regNumber);
    });
    let townsWithCarsSorted = [];
    for (let vehicle in townsWithCars) {
        townsWithCarsSorted.push([vehicle, townsWithCars[vehicle]]);
    }
    townsWithCarsSorted = townsWithCarsSorted.sort(function (a,b) {
        if (a[0] > b[0]){
            return 1;
        } else{
            return -1;
        }
    });

    townsWithCarsSorted = townsWithCarsSorted.map(x => x[0] + ': '+ x[1].plateNumbers.sort(function (a,b) {
        if (a > b){
            return 1;
        } else{
            return -1;
        }
    }).join(', '));

    console.log(`Most driven model: ${sortable[0][0]}`);

    townsWithCarsSorted.forEach(x => {
        console.log(x);
    })
}
solve([ { 'model': 'A', 'regNumber': 'A', 'town': 'Atown', 'price': 5},
    { 'model': 'Z2', 'regNumber': 'Z2', 'town': 'Ztown', 'price': 9},
    { 'model': 'C', 'regNumber': 'B1', 'town': 'Ctown', 'price': 5},
    { 'model': 'D2', 'regNumber': 'D2', 'town': 'Dtown', 'price': 9},
    { 'model': 'D1', 'regNumber': 'D1', 'town': 'Dtown', 'price': 9},
    { 'model': 'Z1', 'regNumber': 'Z1', 'town': 'Ztown', 'price': 9} ]);