import React, { useState } from 'react'
import Table from './Table'
import './homePage.css'

export default function HomePage(props) {
    const [name, setName] = useState('')
    const [table, setTable] = useState(false)

    const validName = () => {
        if (name.length > 0)
            props.onStart(name)
        else {
            alert('Enter ur name')
        }
    }

    return (
        <div className='home-page'>
            <h1>Ready for war</h1>
            <input className='input' onChange={(e) => { setName(e.target.value) }} type='text' placeholder='Enter your name'></input>
            <button className='btn' onClick={validName}>Start</button>
            <button className='btn' onClick={() => { setTable(!table) }}>Score Table</button>
            {table ? <Table playersArr={props.players} /> : null}
        </div>
    )
}





