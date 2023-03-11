import React from 'react'

export default function CardFront(props){
    return(
            <div className='card'>
                <h1 className='word-english'>{props.word.english}</h1>
                <p>{props.word.transcription}</p>
                <h3>{props.word.russian}</h3>
            </div>
    )
}