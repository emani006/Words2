import React from 'react'

export default function TableTwo({item}) {
    return (
    <div className='table__container'>
        <table>
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
            {item.map(elem => {
                return <tr key={elem.id}>
                    <td className='table__cell'>
                        {elem.id}
                    </td>
                    <td className='table__cell'>
                        {elem.english}
                    </td>
                    <td className='table__cell'>
                        {elem.transcription}
                    </td>
                    <td className='table__cell'>
                        {elem.russian}
                    </td>
                    <td className='table__cell'>
                        <button className='table__button e'>Edit</button>
                        <button className='table__button d'>Delete</button>
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
    )
}
