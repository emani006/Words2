import React from 'react'
import Card from '../Card'
// import CardFlipFlop from './CardFlipFlop'
import wordlist from './wordlist'
// import CardClass from './CardClass'
import CardMini from '../CardMini';

export default class SliderClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            wordCount : 0,
        
        };
    }

    previousCard() {
        this.setState((state) => ({
            current: this.state.current - 1
        }));
    }
    nextCard() {
        this.setState((state) => ({
            current: this.state.current + 1
        }));
    }


    // альтернатива, если закончился массив выводимых слов
    loading = <div className="loading">No cards to show. 
                        <div>
                            To step back, use PREVIOUS CARD button
                        </div>
                    </div>;

    // подсчет кликов по кнопке 'Click to translate'
    handleWordCounter = () => {
        this.setState({
            wordCount: this.wordCount + 1
        });
    }

    // классы для компонента Card
    classname = 'show-mean';
    buttonClassName = 'show-button';

render(){
    this.items = this.props.words;
    console.log(this.items);
    console.log(this.items.length);

    return (
<div className="cardContainer">

    <div className='learned-words'>
        <p>Number of words learned today: {this.state.wordCount}</p>
    </div>

    <div className="cardBox">
        <main>

        {/* buttons previous */}
        <div className="navig">
            {this.current > 0 ? (
                <button onClick={this.previousCard}> &laquo; Previous card</button>
                ) : (
                <button className="disabled" disabled>
                    Previous card
                </button>
                )}
        </div>

        {/* show Card or loading text */}
        <div>
            {this.items && this.items.length && (this.current < wordlist.length) > 0 ? <Card key={this.items.id} word={this.items[this.current]} classname={this.classname} buttonClassName={this.buttonClassName} handleWordCounter={this.handleWordCounter}/> : this.loading}
                <div>
                    {this.items && this.items.length > 0 && (this.state.current < wordlist.length) ? (
                        <div >
                            Card {this.state.current + 1} of {this.items.length}
                        </div>) : ("")}
                </div>
        </div>

        {/* button next */}
        <div className="navig">
            {this.state.current <= wordlist.length - 1 ? (
                <button onClick={this.nextCard}>Next card &raquo; </button>
                ) : (
                <button className="disabled" disabled>
                    Next card
                </button>
                )}
        </div>
        </main>
    </div>

    <div className='word-groups'>
        <div className='wordsBox'>
            <div className='wordsUnknown'>Unknown</div>
        </div>

        <div className='wordsBox'>
            {this.current+1 < this.items.length ? <CardMini key={this.items.id} word={this.items[this.current+1]}/> : ''}
            <div className='wordsRemain'>
                <p>Remain</p>
                <div>
                    {this.items && this.items.length > 0 && (this.state.current < wordlist.length) ? (
                            <div >
                                Cards to study: {this.items.length - this.state.current - 1}
                            </div>) : (<div >
                                Cards to study: {this.items.length - this.state.current}
                            </div>)}
                </div>
            </div>
        </div>

        <div className='wordsBox'>
            <div className='wordsKnown'>Known</div>
        </div>
    </div>
    </div>
        )
}
}