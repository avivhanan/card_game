import React from 'react'

export default function Card(props) {
    let color = ['♦', '♥'].includes(props.card.type) ? 'red' : 'black';
    return (
        <div className='card'>
            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-back'>
                        <div className='card-back'></div>
                    </div>
                    <div className='flip-card-front'><div className='card-front' style={{ color }}>{props.card.number}<span>{props.card.type}</span></div></div>
                </div>
            </div>
        </div>
    )
}
