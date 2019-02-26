// let m = 10;
//
// setTimeout(() => {
//     console.log(m);
// },5000);
// console.log('first');

// function walk() {
//     let disnance = 20;
//
//     setInterval(()=>{
//         console.log(disnance);
//         disnance += 10;
//     },500);
//
//     return disnance
// }
//
// let result = walk();
// console.log(result);

// let walking = (() => {
//     let distnace = 10;
//     return {
//         getDistance : function () {
//             return distnace;
//         }
//     };
// })();
//
// console.log(walking.getDistance());

// let solve = (() => {
// //     let sum = 0;
// //
// //     return function add(input) {
// //         sum += input;
// //     }
// // })();
// //
// // let a = solve(4);
// // console.log(a);

let counter = (() => {
    let count = 0;
    return {
        increase : (num) => count += num,
        decrease : (num) => count -= num,
        value : () => count
    }
})();

counter.increase(5);
counter.decrease(2);
console.log(counter.value());