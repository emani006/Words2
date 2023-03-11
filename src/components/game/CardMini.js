import React from 'react'

export default function CardMini(props,ref) {
    let classname = 'show-mean';
    let buttonName = 'Click to translate';
        
    return (
        <div className='cardMini'>
            <h1 className='wordEnglishMini'>{props.word.english}</h1>
            <p>{props.word.transcription}</p>
            <h3 className={classname}>{props.word.russian}</h3>
            <button className='showButtonMini'>{buttonName}</button>
        </div>
        )
}