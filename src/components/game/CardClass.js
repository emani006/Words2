import React from 'react'

export default class CardClass extends React.Component {
    // classname = 'show-mean';
    buttonName = 'Click to translate';
    // buttonClassName = 'show-button';

    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
        this.buttonRef = React.createRef();
        this.state = {
            isActive : this.props.word.isActive,
        }

        // this.handleClick = this.handleClick.bind(this);
        // this.notShow = this.notShow.bind(this);
    }

    focus() {
        this.buttonRef.current.focus();
    }

    handleClick = () => {
        this.setState({
            isActive: !this.state.isActive,
        }); 
        return (this.state.isActive);
    }

    notShow = () => {
        this.setState({
            isActive: false,
        });    
    }

render()
    {
        this.classname = 'show-mean';
        this.buttonClassName = 'show-button';

        if (this.isActive === true){
            this.classname+='__show';
            this.buttonClassName += '__hide';
        }

        console.log(this.isActive);

        return ( 
        <div className='card' onMouseLeave={this.notShow} >
            <h1 className='word-english'>{this.props.word.english}</h1>
            <p>{this.props.word.transcription}</p>
            <h3 className={this.classname}>{this.props.word.russian}</h3>
            <button ref={this.buttonRef} className={this.buttonClassName} onClick={this.handleClick}>{this.buttonName}</button>
        </div>
        )
    }
}