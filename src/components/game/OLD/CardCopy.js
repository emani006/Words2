import React, {useState, useRef, useEffect, forwardRef}  from 'react'

const CardCopy = forwardRef(( {props} , ref) => (
    const buttonName = 'Click to translate';
    const [isActive, setActive] = useState(props.isActive);



let classname = props.classname;
let buttonClassName = props.buttonClassName;


    const handleClick = (e) => {
        setActive (!isActive);
        props.handleWordCounter();
        // changeClass();
        // console.log(buttonClassName);
    }    

    const notShow = () => {
        setActive (isActive = false);
    }

    if (isActive === true) {
        classname+='__show';
        buttonClassName += '__hide';
    }

    // const buttonRef = useRef();

    // useEffect(() => {
    //     buttonRef.current.focus();
    // },[]);

        
    return (
        <div className='card' onMouseLeave={notShow}>
            <h1 className='word-english'>{props.word.english}</h1>
            <p>{props.word.transcription}</p>
            <h3 className={classname}>{props.word.russian}</h3>
            <button ref={buttonRef} className={buttonClassName} onClick={handleClick}>{buttonName}</button>
        </div>
        )
    )
);
    
export default CardCopy;