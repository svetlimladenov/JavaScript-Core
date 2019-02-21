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

const card = makeCard('A','S');
card.face = 'KUR';
console.log(card.toString());