const Person = require('./02.Person');
function solve()
{
    let resultArr = [
        new Person("Maria", "Petrova", 22, "mp@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan", "Nikolov", 25),
        new Person("Peter", "Kolev", 24, "ptr@gmail.com")];
    return resultArr
}

solve().forEach(x => console.log(x.toString()));