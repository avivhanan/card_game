
import { useState } from 'react'
import './App.css';
import HomePage from './components/HomePage';
import ScorePage from './components/ScorePage';
import GamePage from './components/GamePage';
import Player from './classes/Player';
import CardDeck from './classes/CardDeck';


function App() {
  const [page, setPage] = useState('home');
  const [player, setPlayer] = useState()
  const [pc, setPc] = useState()
  const [players, setPlayers] = useState([]);
  console.log(players)

  const showPage = () => {
    if (page == 'home')
      return <HomePage onStart={onStart} players={players} />
    if (page == 'game') {
      return <GamePage player={player} pc={pc} players={players} setPlayer={setPlayer} setPc={setPc} setPlayers={setPlayers} setPage={setPage} />
    }
    if (page == 'score') {
      return <ScorePage player={player} pc={pc} setPage={setPage} dealCards={dealCards} />
    }
  }

  const dealCards = () => {
    let fullDeck = new CardDeck()
    let playerCards = [], pcCards = [];
    for (let i = 0; i < 26; i++) {
      playerCards.push(fullDeck.dealOneCard())
      pcCards.push(fullDeck.dealOneCard())
    }
    return [playerCards, pcCards]
  }

  const onStart = (name) => {
    const decks = dealCards()
    const playerDeck = decks[0]
    const pcDeck = decks[1]

    let newPc = new Player('pc', pcDeck)
    setPc(newPc)

    let existingPlayer;
    players.forEach((val) => {
      if (val.name == name) {
        existingPlayer = val;
      }
    })

    if (existingPlayer) {
      let newPlayer = existingPlayer;
      newPlayer.cards = playerDeck;
      setPlayer(newPlayer)
    }

    else {
      let newPlayer = new Player(name, playerDeck)
      setPlayer(newPlayer)
    }
    setPage('game');
  }

  return (
    <div className="App">
      {showPage()}
    </div>
  );
}

export default App;
