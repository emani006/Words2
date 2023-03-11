import React, {useState} from 'react'

export default function Tinput({elem}){
    const [isActive, setActive] = useState(elem.isActive);
    let rowclassname='table__row_input'

    const handleChange = () => {
        setActive (!isActive);
        rowclassname+='__chosen';
        console.log(isActive);
        return isActive;
    };

    const valueChange = () =>{
        console.log(isActive);
    }

    return(
            <tr key={elem.id} className={rowclassname} onClick={handleChange}>
                <td className='table__cell'>
                    {elem.id}
                </td>
                <td className='table__cell'>
                    <input type='text' value={elem.english} onChange={valueChange}/>
                </td>
                <td className='table__cell'>
                    <input type='text' value={elem.transcription} onChange={valueChange}/>
                </td>
                <td className='table__cell'>
                    <input type='text' value={elem.russian} onChange={valueChange}/>
                </td>
                <td className='table__cell'>
                    <button className='table__button s'>Save</button>
                    <button className='table__button c'>Cancel</button>
                </td>
            </tr>
    )
}