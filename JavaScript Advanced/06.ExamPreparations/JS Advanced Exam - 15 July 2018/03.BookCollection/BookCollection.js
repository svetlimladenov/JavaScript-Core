class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        const allowerRooms = ['livingRoom', 'bedRoom', 'closet'];
        if (allowerRooms.indexOf(room) < 0){
            let errorMsg = `Cannot have book shelf in ${room}`;
            throw new Error(errorMsg);
        }
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get shelfCondition(){
        return this.shelfCapacity;
    }

    addBook(bookName, bookAuthor, genre = ""){
        if (this.shelfCapacity === 0){
            this.shelf.shift();
            this.shelfCapacity++;
        }
        let book = {
            name : bookName,
            author : bookAuthor,
            genre : genre,
        };
        this.shelf.push(book);
        this.shelfCapacity--;

        this.shelf = this.shelf.sort((a,b) => {
           if (a.author < b.author){
               return -1;
           }
           if (a.author > b.author){
               return 1;
           }
           return 0;
        });

        return this;
    };

    showBooks(genre){
        let currentBooks = this.shelf.filter(x => x.genre === genre);
        let result = "";
        result += `Results for search "${genre}":\n`;
        currentBooks.forEach(book => {
            result += `\uD83D\uDCD6 ${book.author} - "${book.name}"\n`
        });
        result.trim();
        return result;
    }

    throwAwayBook(bookName){
        let currentBook = this.shelf.find(x => x.name === bookName);
        let bookIndex = this.shelf.indexOf(currentBook);
        this.shelf.splice(bookIndex,1);
        this.shelfCapacity++;
        this.shelf = this.shelf.sort((a,b) => {
            if (a.author < b.author){
                return -1;
            }
            if (a.author > b.author){
                return 1;
            }
            return 0;
        });
        return this;
    }

    toString(){
        if (this.shelf.length === 0){
            return 'It\'s an empty shelf';
        }
        let result = "";
        result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
        this.shelf.forEach(book => {
            result += `\uD83D\uDCD6 "${book.name}" - ${book.author}\n`
        });
        result.trim();
        return result;
    }
}

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));
