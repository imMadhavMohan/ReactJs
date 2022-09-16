import React, { Component } from 'react'
import Input from '../Components/input'

class FocusInput extends Component {  
    constructor(props){
        super(props)
        this.inputReff = React.createRef()
    }

    handleClick = ()=>{
        this.inputReff.current.focusInput()
    }
    
    render() {
        return (
        <div>
            <Input ref={this.inputReff} />
            <button onClick={this.handleClick}>ClickMe</button>
        </div>
    )
   }
}

export default FocusInput