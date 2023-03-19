import React from 'react'
import Card from './Card'

export default function Words (props) {
        return (
            <main>
                    {props.words.map(el => (
                        <Card key={el.id} word={el}/>
                    ))}
            </main>
        )
    }
