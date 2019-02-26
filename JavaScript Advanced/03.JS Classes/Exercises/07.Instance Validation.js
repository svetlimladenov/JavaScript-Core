class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        if (!/^[\d]{6}$/g.test(clientId)){
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this.clientId = clientId;
        if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
            throw new TypeError('Invalid e-mail');
        }
        this.email = email;
        if (firstName.length < 3 || firstName.length > 20)
        {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if (lastName.length < 3 || lastName.length > 20)
        {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if (!/^[a-zA-Z]+$/.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        if (!/^[a-zA-Z]+$/.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this.firstName = firstName;
        this.lastName = lastName;
    }
}



let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')