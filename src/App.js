
import { useState } from 'react'
import './App.css';
import HomePage from './components/HomePage';
import ScorePage from './components/ScorePage';
import GamePage from './components/GamePage';
import Player from './classes/Player';
import CardDeck from './classes/CardDeck';

let player, pc;
function App() {
  const [page, setPage] = useState(0);
  const [players, setPlayers] = useState([]);

  const showPage = () => {
    if (page == 0)
      return <HomePage start={initGame} players={players} />
    if (page == 1) {
      return <GamePage player={player} pc={pc} setPage={setPage} />
    }
    else {
      return <ScorePage player={player} pc={pc} setPage={setPage} dealCards={dealNewCards} />
    }
  }

  const dealNewCards = () => {
    let fullDeck = new CardDeck()
    let playerCards = [], pcCards = [];
    for (let i = 0; i < 26; i++) {
      playerCards.push(fullDeck.dealOneCard())
      pcCards.push(fullDeck.dealOneCard())
    }
    return [playerCards, pcCards]
  }

  const initGame = (name) => {
    const [playerDeck, pcDeck] = dealNewCards();

    // Use find instead forEach
    let existingPlayer;
    players.forEach((player) => {
      if (player.name == name) {
        existingPlayer = player;
      }
    })

    if (pc) {
      pc.cards = pcDeck;
    } else {
      pc = new Player('pc', pcDeck)
    }

    if (existingPlayer) {
      player = existingPlayer;
      player.cards = playerDeck;
      setPlayers([...players])
    } else {
      player = new Player(name, playerDeck)
      setPlayers([...players, player])
    }
    setPage(1);
  }

  return (
    <div className="App">
      {showPage()}
    </div>
  );
}

export default App;
