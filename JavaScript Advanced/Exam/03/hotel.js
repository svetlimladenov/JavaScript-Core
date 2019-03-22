class Hotel {
    constructor(name, capacity){
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
    }

    get roomsPricing(){
        return {
            single : 50,
            double : 90,
            maisonette : 135
        }
    }

    get servicesPricing(){
        return {
            food : 10,
            drink : 15,
            housekeeping : 25,
        }
    }

    rentARoom(clientName, roomType, nights){
        if (!this.roomsPricing.hasOwnProperty(roomType)){
            return;
        }

        this.currentBookingNumber++;
    }

    roomService(currentBookingNumber, serviceType){

    }

    checkOut({currentBookingNumber}){

    }
    report(){
        if (this.bookings.length === 0){
            return "There are currently no bookings.";
        }
    }
}

let hotel = new Hotel("Sport", 10);
console.log(hotel.rentARoom("Ivan", "maisonette", 3));
console.log(hotel.rentARoom("Ivan", "maisonette", 3));
console.log(hotel.rentARoom("Ivan", "maisonette", 3));