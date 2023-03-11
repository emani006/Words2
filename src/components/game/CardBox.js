import React from 'react'
import CardFlipFlop from './CardFlipFlop'

export default function CardBox(props){
    const wordsList = props.words.map(word => (
        <CardFlipFlop key={word.id} {...word}/>
    ));
    console.log(wordsList);

    return(
        <div className='cardBox'>
            {wordsList}
        </div>
    )
}