import React, { useState } from 'react'
import Card from './Card'
import './game.css'
import './card.css'

export default function GamePage(props) {
    const [cardIndex, setCardIndex] = useState(0)
    const [pcPoints, setPcPoints] = useState(0)
    const [playerPoints, setPlayerPoints] = useState(0)

    const onNext = () => {
        let newPlayer = { ...props.player }
        if (props.pc.cards[cardIndex].number > newPlayer.cards[cardIndex].number) {
            setPcPoints(pcPoints + 1)
        }
        else if (props.pc.cards[cardIndex].number < newPlayer.cards[cardIndex].number) {
            setPlayerPoints(playerPoints + 1)
        }

        if (cardIndex == 25) {
            newPlayer.games++

            if (playerPoints > pcPoints) {
                newPlayer.win++
                newPlayer.lastGame = `${newPlayer.name} u won`
            }
            else if (playerPoints < pcPoints) {
                newPlayer.lose++
                newPlayer.lastGame = `${newPlayer.name} u lose`
            }
            else {
                newPlayer.lastGame = 'its adraw'

            }
            setPlayerPoints(0)
            setPcPoints(0)
            props.setPlayer(newPlayer)
            //
            let existingPlayerIndex;
            let coppyPlayers = [...props.players]
            coppyPlayers.forEach((val, i) => {
                if (val.name == newPlayer.name) {
                    existingPlayerIndex = i;
                }
            })
            if (existingPlayerIndex >= 0) {
                coppyPlayers[existingPlayerIndex] = newPlayer
            }
            else {
                coppyPlayers.push(newPlayer)
            }
            props.setPlayers(coppyPlayers)
            props.setPage('score')

        }
        else {
            setCardIndex(cardIndex + 1)
        }
    }

    return (
        <div className='game'>
            <div className='game-box'>
                <div className='game-div-text'>{props.player.name}</div>
                <Card card={props.player.cards[cardIndex]} />
                <div className='game-div-text'>{props.player.name} Score: {playerPoints}</div>
            </div>
            <div className='game-details'>
                <div className='game-div-text'>Round:{cardIndex}</div>
                <button className='game-btn' onClick={onNext}>Next</button>
            </div>
            <div className='game-box'>
                <div className='game-div-text'>{props.pc.name}</div>
                <Card card={props.pc.cards[cardIndex]} />
                <div className='game-div-text'>Pc Score: {pcPoints}</div>
            </div>
        </div>
    )
}
