import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)    
    this.inputRef = React.createRef()    
  }  

  componentDidMount(){    
    this.inputRef.current.focus()
    console.log(this.inputRef)
  }

  handleClick = ()=> {    
    alert(`Your name is: ${this.inputRef.current.value}`)    
  }

  render() {
    return (
        <>
            <label>Name: </label>  
            <input type="text" ref={this.inputRef} />
            <button onClick={this.handleClick}>ClickMe-1</button>           
        </>
    )
  }
}

export default RefsDemo