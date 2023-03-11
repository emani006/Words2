import React, {useState, useRef, useEffect}  from 'react'

export default function Card (props){
    // let classname = 'show-mean';
    // let buttonClassName = 'show-button';
    let buttonName = 'Click to translate';
    let [isActive, setActive] = useState(props.isActive);
    let [isKnown, setKnown] = useState(props.isKnown);

let classname = props.classname;
let buttonClassName = props.buttonClassName;


    const handleClick = () => {
        setActive (!isActive);
        props.handleWordCounter();
    }    

    // const handlChange = (event) => {
    //     setKnown(true);
    // }

    const notShow = () => {
        // console.log('isActive prev: ' + isActive)
        setActive (isActive = false);
        // if (isActive === true){
        //     setActive (false);
        // }
    // console.log('isActive post: ' + isActive)
    }

    if (isActive === true) {
        classname+='__show';
        buttonClassName += '__hide';
    }

    const buttonRef = useRef();

    useEffect(() => {
        buttonRef.current.focus();
        // console.log('render');
    },)

    // const FancyButton = React.forwardRef((props,ref) => (
    //     <button ref={buttonRef} className={buttonClassName} onClick={handleClick}>{props.children}</button>
    //     ));
        
    return (
        <div className='card' onMouseLeave={notShow}>
            <h1 className='word-english'>{props.word.english}</h1>
            <p>{props.word.transcription}</p>
            <h3 className={classname}>{props.word.russian}</h3>
            {/* <FancyButton ref={buttonRef}>{buttonName}</FancyButton> */}
            <button ref={buttonRef} className={buttonClassName} onClick={handleClick}>{buttonName}</button>
            <div className='word-kind'>
                <div className='word-unknown' onClick={() => props.switchCard('Unknown')}>Unknown</div>
                <div className='word-known' onClick={() => props.switchCard('Known')}>Known</div>
            </div>
        </div>
        )
}