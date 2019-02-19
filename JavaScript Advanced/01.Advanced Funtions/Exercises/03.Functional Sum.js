let solve2 = (function () {
    let sum = 0;
    function add (number) {
        sum+= number;
        console.log(sum);
        return add;
    }

    //this 3 rows are just for judge to work
    add.toString = function(){
        return sum;
    };

    return add;
})();

solve2(1)(4);