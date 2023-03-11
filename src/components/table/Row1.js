import React from 'react'

export default class Row1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isActive : props.isActive,
            english : props.english,
            transcription : props.transcription,
            russian : props.russian
        }
    }
    
    handleTableChange = () => {
        this.setState (!this.isActive);
        console.log(this.isActive);
        console.log(this.id);
    };

    changeEnglish = (event) =>{
        console.log(event.target.value);
        this.setState({english : event.target.value});
    }

    submitChange = (event) => {
        event.preventDefault();
        document.getElementByNam(this.id).value = event.target.value;
        console.log(event.target.value);
    }

render(){
    const rowClassName='table_row';
    const inputClassName='table_row_input';

if (!this.isActive) {return(<tr key={this.state.id} className={rowClassName} >
                            <td className='table__cell'>
                                {this.id}
                            </td>
                            <td className='table__cell'> 
                                {this.state.english}
                            </td>
                            <td className='table__cell'>
                                {this.state.transcription}
                            </td>
                            <td className='table__cell'>
                                {this.state.russian}
                            </td>
                            <td className='table__cell'>
                                <button className='table__button e' onClick={this.handleTableChange}>Edit</button>
                                <button className='table__button d'>Delete</button>
                            </td>
                        </tr>
                )} else {return(<tr key={this.state.id} className={inputClassName}>
                    <td className='table__cell'>
                        {this.id}
                    </td>
                        <td className='table__cell'>
                            <input name='eng' type='text' value={this.state.english} onInput={this.changeEnglish.bind(this)}/>
                        </td>
                        <td className='table__cell'>
                            <input name='spell' type='text' value={this.state.transcription}/>
                        </td>
                        <td className='table__cell'>
                            <input name='rus' type='text' value={this.state.russian}/>
                        </td>
                        <td className='table__cell'>
                            <button className='table__button s' onClick={this.submitChange}>Save</button>
                            <button className='table__button c' onClick={this.handleTableChange}>Cancel</button>
                        </td>
                </tr>
    )}
}
}