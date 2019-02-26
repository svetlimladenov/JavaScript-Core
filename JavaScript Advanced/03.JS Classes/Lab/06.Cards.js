const result = (function(){
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    function Suits() {}
        Suits.SPADES = '♠';
        Suits.HEARTS = '♥';
        Suits.DIAMONDS ='♦';
        Suits.CLUBS = '♣';


    class Card {
        constructor(face, suit) {
            this._suit = null;
            this._face = null;

            this.face = face;
            this.suit = suit;
        }
        get suit(){
            return this._suit;
        }

        set suit(val){
            if (!Object.values(Suits).includes(val)) {
                throw new Error('GTFO');
            }
            this._suit = val;
        }

        get face(){
            return this._face;
        }

        set face(val){
            if (!validFaces.includes(val)) {
                throw new Error('Invalid card face ' + val);
            }
            this._face = val;
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}());

let Card = result.Card;
let Suit = result.Suits;

let newCard = new Card('Q',Suit.CLUBS);

