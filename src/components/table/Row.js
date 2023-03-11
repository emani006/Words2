import React, { useState } from 'react'
import wordlist from '../wordlist';

export default function Row(elem){
    const [isActive, setActive] = useState(elem.isActive);
    const [id] = useState(elem.id);
    const [english, setEnglish] = useState(elem.english);
    const [russian, setRussian] = useState(elem.russian);
    const [transcription, setTranscription] = useState(elem.transcription);
    let [isValid, setValid] = useState(false);
    let [localWordlist, setLocalWordlist] = useState(wordlist);


    let rowClassName='table_row';
    let inputClassName='table_row_input';

    let tableInputClassName = 'table__cell';

    const changeWord = () => {
        let newWord = {
            id: id,
            english: english,
            russian: russian,
            transcription: transcription
        };
        

        let wordIndex = localWordlist.indexOf(localWordlist.find(item => item.id === id),0);


        if (english !== '' && russian !== '' && transcription!== ''){
            localWordlist[wordIndex]= newWord;

            setValid(isValid = true);
            handleTableChange();
            console.log('isValid saveWord ' + isValid);
        } else {
            setValid(isValid = false);
        }
        setValid(isValid = false);
    }


    const deleteWord = (elemId) => {
        let wordToBeDeleted = localWordlist.find(item => item.id === elemId);

        let i = localWordlist.indexOf(wordToBeDeleted);
        localWordlist.splice(i, 1);
        console.log(elemId);
        setValid(false);
        setLocalWordlist(localWordlist);
        console.log(localWordlist);
    }


    const handleTableChange = () => {
        setActive (!isActive);
    };


    const cancelAction = () => {
        let wordToBeCancelled = localWordlist.find(item => item.id === id);
        let i = localWordlist.indexOf(wordToBeCancelled);


        console.log(localWordlist[i].english);
        console.log(localWordlist[i].russian);
        console.log(localWordlist[i].transcription);

        // возвращение предыдущего сохраненного значения
        if (localWordlist[i].english !== ''){
            setEnglish(localWordlist[i].english);
        }
        if (localWordlist[i].russian !== '' ){
            setRussian(localWordlist[i].russian);
        }
        if (localWordlist[i].transcription !== '' ){
            setTranscription(localWordlist[i].transcription);        
        }
        setActive (!isActive);
    };
    

    if (!isActive) return(<tr key={elem.id} className={rowClassName} >
                            <td className='table__cell'>
                                {id}
                            </td>
                            <td className='table__cell'> 
                                {english}
                            </td>
                            <td className='table__cell'>
                                {transcription}
                            </td>
                            <td className='table__cell'>
                                {russian}
                            </td>
                            <td className='table__cell'>
                                <button className='table__button e' onClick={handleTableChange}>Edit</button>
                                <button className='table__button d' onClick={() => deleteWord(elem.id)}>Delete</button>
                            </td>
                        </tr>
                )
    else return(<tr key={elem.id} className={inputClassName}>
                    <td className='table__cell'>
                        {elem.id}
                    </td>
                        <td className={tableInputClassName}>
                            <input name='eng' type='text' required value={english} onChange={(event) => setEnglish(event.target.value)}/>
                        </td>
                        <td className={tableInputClassName}>
                            <input name='spell' type='text' required value={transcription} onChange={(event) => setTranscription(event.target.value)}/>
                        </td>
                        <td className={tableInputClassName}>
                            <input name='rus' type='text' required value={russian} onChange={(event) => setRussian(event.target.value)}/>
                        </td>
                        <td className='table__cell'>
                            <button className='table__button s' disabled={isValid} onClick={changeWord}>Save</button>
                            <button className='table__button c' onClick={cancelAction}>Cancel</button>
                        </td>
                </tr>
    )
} 