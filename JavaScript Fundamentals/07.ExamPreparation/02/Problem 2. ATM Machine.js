function solve(input) {
    let atm = {
        'totalSum' : 0
    };
    input.forEach(x => {
        if (x.length > 2)
        {
            let currentInsert = 0;
            x.forEach(b => {
                if (atm[b]){
                    atm[b]++;
                }else{
                    atm[b] = 1;
                }
                atm.totalSum += b;
                currentInsert += b;
            });
            console.log(`Service Report: ${currentInsert}$ inserted. Current balance: ${atm.totalSum}$.`)
        }else if(x.length === 2){
            let currentUserBalance = Number(x[0]);
            let moneyToWithdraw = Number(x[1]);
            if (moneyToWithdraw > currentUserBalance)
            {
                console.log(`Not enough money in your account. Account balance: ${currentUserBalance}$.`);
            }else if(moneyToWithdraw > atm.totalSum)
            {
                console.log('ATM machine is out of order!');
            }else{
                withdraw(moneyToWithdraw);
                function withdraw(moneyToWithdraw) {
                    let banknotes = Object.keys(atm).filter(x => x !== 'totalSum').reverse().filter(x => x <= moneyToWithdraw);
                    let filtered = Object.keys(atm)
                        .filter(key => banknotes.includes(key))
                        .reduce((obj, key) => {
                            obj[key] = atm[key];
                            return obj;
                        }, {});
                    const ordered = {};
                    Object.keys(filtered).reverse().forEach(function(key) {
                        ordered[key] = filtered[key];
                    });

                    for (const banknote in ordered) {
                        console.log(banknote);
                    }
                }
            }
        }

    });

}

solve([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);