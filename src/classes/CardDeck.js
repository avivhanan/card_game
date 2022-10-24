class CardDeck {
    cards = [];

    constructor() {
        for (let i = 1; i < 14; i++) {
            for (let j = 0; j < 4; j++) {
                this.cards.push({ number: i, type: ['♦', '♥', '♠', '♣'][j] });
            }
        }
    }

    dealOneCard() {
        let rand = Math.floor(Math.random() * this.cards.length)
        let card = this.cards.splice(rand, 1)
        return card[0]
    }
}

export default CardDeck;
