import React, { useState } from 'react'
import Card from './Card'
// import CardFlipFlop from './CardFlipFlop'
// import wordlist from '../wordlist'
// import CardClass from './CardClass'
import CardMini from './CardMini';


export default function Slider(props) {
    const [current, setCurrent] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [wordsLearnedArray] = useState([]);
    const [isKnown, setKnown] = useState(props.isKnown);
    const [arrKnown, setArrKnown] = useState(props.arrKnown);
    const [arrUnknown, setArrUnknown] = useState(props.arrUnknown);

    // css классы для компонента Card
    const classname = 'show-mean';
    const buttonClassName = 'show-button';

    const [items] = useState (props.words);


    // слово знакомое/незнакомое
    const switchCard = (kind, isKnown) => {    
        isKnown = kind;
        // items[current].isKnown = kind;
        let knownWord = arrKnown.includes(items[current]);
        let unknownWord = arrUnknown.includes(items[current]);

        if (knownWord === true) {
                arrKnown.splice(arrKnown.indexOf(items[current]), 1);
            } else if (unknownWord === true) {
                arrUnknown.splice(arrUnknown.indexOf(items[current]), 1);
            }
    
        if (kind === 'Known' && current < items.length && knownWord === false) {
                setKnown('Known');
                arrKnown.push(items[current]);
        } else if (kind === 'Unknown' && current < items.length && unknownWord === false) {
                setKnown('Unknown');
                arrUnknown.push(items[current]);
            }   
        }


    // const previousCard = () => setCurrent((prevState) => ( prevState - 1 ));
    // const nextCard = () => setCurrent((prevState) => ( prevState + 1 ));
    
    // кнопка перехода вперед
    const nextCard = () => {
        if (current === items.length){
            setCurrent(0);
            setWordCount(0);
        } else {
        setCurrent((prevState) => ( prevState + 1 ));
        }
    };

    // кнопка перехода назад
    const previousCard = () => {
        if (current === items.length){
            setCurrent(0);
            setWordCount(0);
            setArrKnown([]);
            setArrUnknown([]);
        } else {
        setCurrent((prevState) => ( prevState - 1 ));
        }
    };


    // альтернатива, если закончился массив выводимых слов
    const loading = <div className="loading">That's all, folks! 
                        <div>
                            To try again, press START AGAIN
                        </div>
                    </div>;


    // подсчет кликов по кнопке 'Click to translate' невыученных слов
    const handleWordCounter = () => {
            wordsLearnedArray.push(items[current]);

            if (items[current].isLearned === false){
                setWordCount((prevState) => ( prevState + 1 ));
                items[current].isLearned = true;
            } else {
                wordsLearnedArray.pop(items[current]);
            }
    }


    return (
<div className="cardContainer">

    <div className='learned-words'>
        <p>Number of words learned today: {wordCount}</p>
    </div>

    <div className="cardBox">
        <main>


        {/* buttons previous */}
        <div className="navig">
            {current > 0 && current < items.length? (
                <button onClick={previousCard}> &laquo; Previous card</button>
                ) : current === 0 ? (
                <button className="disabled" disabled>
                    Previous card
                </button>
                ) : current === items.length ? (
                    <button onClick={previousCard} className='start-game'> START AGAIN</button>
                    ): ''}
        </div>

        {/* show Card or loading text */}
        <div>
            {items && items.length && (current < items.length) > 0 ? <Card key={items.id} word={items[current]} classname={classname} buttonClassName={buttonClassName} handleWordCounter={handleWordCounter} switchCard={switchCard}/> : loading}
                <div>
                    {items && items.length > 0 && (current < items.length) ? (
                        <div >
                            Card {current + 1} of {items.length}
                        </div>) : (
                            <div> Card {items.length} of {items.length}</div>
                            )}
                </div>
        </div>

        {/* button next */}
        <div className="navig">
            {current < items.length-1 ? (
                <button onClick={nextCard}>Next card &raquo; </button>
                ) : current === items.length-1 ? (
                        <button onClick={nextCard} className='button-end-game'> END GAME</button>
                    ) : ''
                // <button className="disabled" disabled>
                //     Next card
                // </button>
                }
        </div>
        </main>
    </div>

    {/* array of unknown words */}
    <div className='words-group'>
        <div className='wordsBox'>
            <div>
                {current <= items.length && (props.arrUnknown.length !== 0) ? (
                    arrUnknown.map((el,index) => (
                        <CardMini className='cardMini' key={index} word={el}/>
                        ))
                    ) : ('')}
            </div>
            <div className='wordsUnknown'>
                <p>Unknown</p>
                <div>
                    {current <= items.length && (arrUnknown.length !== 0) ? (
                            <div >
                                Unknown words: {arrUnknown.length}
                            </div>) : (
                                ''
                            )}
                </div>
            </div>
        </div>

    {/* remain words */}
        <div className='wordsBox'>
                {current+1 < items.length ? <CardMini className='cardMini' key={items.id} word={items[current+1]}/> : ''
                }
            <div className=' wordsRemain'>
                <p>Remain</p>
                <div>
                    {items && items.length > 0 && (current < items.length) ? (
                            <div >
                                Cards to study: {items.length - current - 1}
                            </div>) : (<div >
                                Cards to study: {items.length - current}
                            </div>)}
                </div>
            </div>
        </div>

    {/* array of known words */}
        <div className='wordsBox'>
            <div>
                {current <= items.length && (arrKnown.length !== 0) ? (
                    arrKnown.map((el,index) => (
                        <CardMini className='cardMini' key={index} word={el}/>
                    ))                
                    ) : ('')}
            </div>
            <div className='wordsKnown'>
                <p>Known</p>
                <div>
                    {current <= items.length && (arrKnown.length !== 0) ? (
                            <div >
                                Known words: {arrKnown.length}
                            </div>) : (
                                ''
                            )}
                </div>
            </div>
        </div>
    </div>
</div>
    )
}