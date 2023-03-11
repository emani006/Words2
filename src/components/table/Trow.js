import React, {useState} from 'react'

export default function Trow({elem}){
    const [isActive, setActive] = useState(elem.isActive);
    let rowClassName='table_row';
    let inputClassName='table_row_input';

    const handleChange = () => {
        setActive (!isActive);
        console.log(isActive);
        console.log(elem.id);
    };

    if (!isActive) return(<tr key={elem.id} className={rowClassName} onClick={handleChange}>
                            <td className='table__cell'>
                                {elem.id}
                            </td>
                            <td className='table__cell'> 
                                {elem.english}
                            </td>
                            <td className='table__cell'>
                                {elem.transcription}
                            </td>
                            <td className='table__cell'>
                                {elem.russian}
                            </td>
                            <td className='table__cell'>
                                <button className='table__button e'>Edit</button>
                                <button className='table__button d'>Delete</button>
                            </td>
                        </tr>
                )
    else return(<tr key={elem.id} className={inputClassName} onClick={handleChange}>
                    <td className='table__cell'>
                        {elem.id}
                    </td>
                    <td className='table__cell'>
                        <input type='text' defaultValue={elem.english}/>
                    </td>
                    <td className='table__cell'>
                        <input type='text' defaultValue={elem.transcription}/>
                    </td>
                    <td className='table__cell'>
                        <input type='text' defaultValue={elem.russian}/>
                    </td>
                    <td className='table__cell'>
                        <button className='table__button s'>Save</button>
                        <button className='table__button c'>Cancel</button>
                    </td>
                </tr>
    )
}