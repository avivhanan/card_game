import React from 'react'
import './table.css'

export default function Table(props) {
    const sorted = [...props.playersArr]
    sorted.sort((a, b) => {
        return b.win - a.win;
    });
    console.log(sorted)
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>win</th>
                        <th>lose</th>
                    </tr>
                </thead>
                <tbody>
                    {sorted.map((val) => {
                        return (
                            <tr key={val.name}>
                                <td>{val.name}</td>
                                <td>{val.win}</td>
                                <td>{val.lose}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
