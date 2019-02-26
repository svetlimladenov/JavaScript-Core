function solve(ticketsInput, sortCriteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    function compareTickets(a, b){
        if(a > b){
            return 1;
        } else if(a === b){
            return 0;
        } else {
            return -1;
        }
    }

    let tickets = [];

    ticketsInput.forEach(ticket => {
        let ticketArgs = ticket.split('|');
        let newTicket = new Ticket(ticketArgs[0], Number(ticketArgs[1]), ticketArgs[2]);
        tickets.push(newTicket);
    });

    tickets = tickets.sort((a, b) => compareTickets(a[sortCriteria],b[sortCriteria]));
    return tickets;
}


const input = solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);
console.log(input);