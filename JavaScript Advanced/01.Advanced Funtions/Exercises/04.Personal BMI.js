function solve(name,age,weight,height) {
    function chooseStatus(BMI){
        if(BMI < 18.5){
            return "underweight";
        } else if(BMI < 25 && BMI >= 18.5){
            return "normal";
        } else if(BMI >= 25 && BMI < 30){
            return "overweight";
        } else{
            return "obese";
        }
    }
    let person = {
        name: name,
        personalInfo : {
            age,
            weight,
            height,
        },
        BMI : Math.round(weight / Math.pow(height / 100,2)),
    };
    person.status = chooseStatus(person.BMI);
    if (person.status === 'obese')
    {
        person.recommendation = 'admission required';
    }
    return person;
}

const a = solve("Honey Boo Boo", 9, 57, 137);
console.log(a);
//
// function foo() {
//     const aa = {
//         name : "Svetli",
//         secondName : "Mladenov",
//         fullName :  () => {
//             return aa.name;
//         },
//         execute : () => {
//             console.log(aa);
//         }
//     };
//     return aa.execute();
// }
//
// console.log(foo());