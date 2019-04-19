class Organization{
    constructor(name, budget){
        this.name = name;
        this.employees = [];
        this.budget = budget;
        this.departments = {
            marketing : Math.floor(this.budget * 40 / 100),
            finance: Math.floor(this.budget * 25 / 100),
            production : Math.floor(this.budget * 35 / 100)
        };
    }

    get departmentsBudget(){
        return this.departments;
    }

    add(employeeName, department, salary){
        let deparementBudget = this.departmentsBudget[department];
        if (deparementBudget >= salary){
            let employee = {
                employeeName,
                department,
                salary
            };
            this.employees.push(employee);
            this.departmentsBudget[department] = this.departmentsBudget[department] - salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`
        }else{
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${deparementBudget}.`
        }
    }

    employeeExists(employeeName){
        let employee = this.employees.find(x => x.employeeName === employeeName);
        if (employee){
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`
        }else{
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    leaveOrganization(employeeName){
        let employeeIndex = this.employees.findIndex(x => x.employeeName === employeeName);
        if (employeeIndex >= 0){
            let employee = this.employees.find(x => x.employeeName === employeeName);
            this.employees.splice(employeeIndex,1);
            this.departments[employee.department] += employee.salary;
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`
        }else{
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }
    status(){
        let output = `${this.name.toUpperCase()} DEPARTMENTS:`;
        let marketingEmployees = this.employees.filter(e => e.department === 'marketing').sort((a, b) => b.salary - a.salary).map(x => x.employeeName);
        let financeEmployees = this.employees.filter(e => e.department === 'finance').sort((a, b) => b.salary - a.salary).map(x => x.employeeName);
        let production = this.employees.filter(e => e.department === 'production').sort((a, b) => b.salary - a.salary).map(x => x.employeeName);

        output += `\nMarketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.join(', ')} | Remaining Budget: ${this.departmentsBudget.marketing}`;
        output += `\nFinance | Employees: ${financeEmployees.length}: ${financeEmployees.join(', ')} | Remaining Budget: ${this.departmentsBudget.finance}`;
        output += `\nProduction | Employees: ${production.length}: ${production.join(', ')} | Remaining Budget: ${this.departmentsBudget.production}`;
        return output;
    }
}

let organization = new Organization('SoftUni', 20000);
console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Robert', 'production', 2000));
console.log(organization.leaveOrganization('Peter'));



console.log(organization.status());

