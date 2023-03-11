import React from 'react'
// import wordlist from './wordlist'
// import Cell from './Cell'

export default function Table({words}) {
    return (
    <div className='table__container'>
        <table >
        <thead className='table__header'>
                <tr>
                <th className='table__cell'>#</th>
                    <th className='table__cell'>English</th>
                    <th className='table__cell'>Transcription</th>
                    <th className='table__cell'>Russian</th>
                    <th className='table__cell'></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='table__cell'>
                        {words.map(elem => {
                            return <li key={elem.id}>{elem.id}</li>;
                        })}
                    </th>
                    <td className='table__cell'>
                        {words.map(elem => {
                            return <li key={elem.id}>{elem.english}</li>;
                        })}
                    </td >
                    <td className='table__cell'>
                        {words.map(elem => {
                            return <li key={elem.id}>{elem.transcription}</li>;
                        })}
                    </td>
                    <td className='table__cell'>
                        {words.map(elem => {
                            return <li key={elem.id}>{elem.russian}</li>;
                        })}
                    </td>
                    <td className='table__cell'>
                        <button className='table__button e'>Edit</button>
                        <button className='table__button d'>Delete</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
    )
}
