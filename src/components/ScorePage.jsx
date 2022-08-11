import React from 'react'
import './scorePage.css'

export default function ScorePage(props) {

    let newCards = props.dealCards()
    let newPlayerCards = newCards[0]
    let newPcCards = newCards[1]


    const onAgain = () => {
        props.player.cards = newPlayerCards;
        props.pc.cards = newPcCards;
        props.setPage(1)
    }

    return (
        <div className='score-page'>
            <div className='exit-btn-wraper'>
                <button className='exit-btn' onClick={() => { props.setPage(0) }}>X</button>
            </div>
            <div className='score-details'>
                <div>{props.player.lastGame}</div>
                <div>{props.player.win}-{props.player.lose}</div>
                <button className='again-btn' onClick={onAgain}>Again?</button>
            </div>
        </div>
    )
}
