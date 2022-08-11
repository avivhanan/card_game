class Player {
    win = 0;
    lose = 0;
    games = 0;
    lastGame = '';

    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }
}

export default Player;
