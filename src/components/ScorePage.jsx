import React from 'react'
import './scorePage.css'

export default function ScorePage(props) {
    const onAgain = () => {
        let newCards = props.dealCards()
        let newPlayerCards = newCards[0]
        let newPcCards = newCards[1]

        props.player.cards = newPlayerCards;
        props.pc.cards = newPcCards;
        props.setPage('game')
    }

    return (
        <div className='score-page'>
            <div className='exit-btn-wraper'>
                <button className='exit-btn' onClick={() => { props.setPage('home') }}>X</button>
            </div>
            <div className='score-details'>
                <div>{props.player.lastGame}</div>
                <div>{props.player.win}-{props.player.lose}</div>
                <button className='again-btn' onClick={onAgain}>Again?</button>
            </div>
        </div>
    )
}
