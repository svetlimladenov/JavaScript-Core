function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S' : '\u2660',
            'H' : '\u2665',
            'D' : '\u2666',
            'C' : '\u2663'
        };
        if (validFaces.indexOf(face) === -1 || !validSuits.hasOwnProperty(suit))
        {
            throw new Error();
        }

        let card = {
            face,
            suit : validSuits[suit],
            toString : function () {
                return this.face + this.suit;
            }
        };

        return card;
    }

    let hasInvalidCards = false;
    let deck = cards.map(x => {
         let c = x.split('');
         let suit = c.pop();

         try {
             return makeCard(c.join(''), suit);
         }catch (e) {
             console.log(`Invalid card: ${c}${suit}`);
             hasInvalidCards = true;
         }

     });
    if (hasInvalidCards) {
        return;
    }
    console.log(deck.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);

