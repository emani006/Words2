import React, {useState}  from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default function CardFlipFlop(props) {
    let [isActive, setActive] = useState(props.isActive);

    const handleClick = () => {
        setActive (!isActive);
    }

    if (!isActive) {return(
        <div className='scene'>
            <div className="card is-flipped" onClick={handleClick}>
                <div className="card__face card__face-back">
                    <CardBack key={props.id} {...props}/>
                </div>
            </div>
        </div>
    )} else {return (
        <div className='scene'>
            <div className="card" onMouseLeave={handleClick}>
                <div className="card__face">
                    <CardFront key={props.id} {...props}/>
                </div>
            </div>
        </div>
        )}
}