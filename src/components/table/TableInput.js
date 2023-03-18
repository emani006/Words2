import React, { useState, useContext} from 'react'
import Row from './Row';
import {MyContext} from '../../context/MyContext'

export default function TableInput() {
    // export default function TableInput({item}) {

    const {context, setContext} = useContext(MyContext)

    let [localWordlist, setLocalWordlist] = useState(context);
    let [isValid, setValid] = useState(false);


    const deleteWord = (elemId) => {
        console.log(elemId);
        console.log(context);
        setLocalWordlist(context);
        console.log(localWordlist)

        let wordToBeDeleted = localWordlist.find(item => item.id === elemId);

        let i = localWordlist.indexOf(wordToBeDeleted);
        localWordlist.splice(i, 1);
        console.log(localWordlist);

        setValid(false);
        setLocalWordlist(setContext);

        // setContext(localWordlist);
        console.log(context);
    }


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
            <tbody >
                {context.map(elem => {
                    return <Row key={elem.id} deleteWord={deleteWord} id={elem.id} english={elem.english} transcription={elem.transcription} russian={elem.russian} isActive={elem.isActive}></Row>
                })}
            </tbody>
        </table>
    </div>
    )
}
