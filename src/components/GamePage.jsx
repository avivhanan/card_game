import React, { useState } from 'react'
import Card from './Card'
import './game.css'
import './card.css'

let playerPoints = 0, pcPoints = 0;
export default function GamePage(props) {
    const [cardIndex, setCardIndex] = useState(0)

    const onNext = () => {
        if (props.pc.cards[cardIndex] > props.player.cards[cardIndex]) {
            pcPoints++;
        }
        else if (props.pc.cards[cardIndex] < props.player.cards[cardIndex]) {
            playerPoints++;
        }

        if (cardIndex == 25) {
            props.player.games++

            if (playerPoints > pcPoints) {
                props.player.win++
                props.player.lastGame = 'win'
            }
            else if (playerPoints < pcPoints) {
                props.player.lose++
                props.player.lastGame = 'lose'
            }
            else {
                props.player.lastGame = 'draw'

            }
            playerPoints = 0;
            pcPoints = 0
            props.setPage(2)

        }
        else {
            setCardIndex(cardIndex + 1)
        }
    }

    return (
        <div className='game'>
            <div className='game-box'>
                <div className='game-div-text'>{props.player.name}</div>
                <Card cards={props.player.cards[cardIndex]} />
                <div className='game-div-text'>{props.player.name} Score: {playerPoints}</div>
            </div>
            <div className='game-details'>
                <div className='game-div-text'>Round:{cardIndex}</div>
                <button className='game-btn' onClick={onNext}>Next</button>
            </div>
            <div className='game-box'>
                <div className='game-div-text'>{props.pc.name}</div>
                <Card cards={props.pc.cards[cardIndex]} />
                <div className='game-div-text'>Pc Score: {pcPoints}</div>
            </div>
        </div>
    )
}
