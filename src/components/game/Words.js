import React from 'react'
import Card from './Card'
// import CardFlipFlop from './CardFlipFlop'

export default function Words (props) {
        return (
            <main>
                    {props.words.map(el => (
                        <Card key={el.id} word={el} />
                        // <CardFlipFlop key={el.id} word={el} />
                    ))}
            </main>
        )
    }
