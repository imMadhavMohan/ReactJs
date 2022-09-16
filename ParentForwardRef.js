import React, { Component } from 'react'
import Forwardref from '../Components/ForwardRef'

class ParentForwardRef extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    handleClick = () => {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <Forwardref ref={this.inputRef} />
        <button onClick={this.handleClick}>ClickMeDear</button>
      </div>
    )
  }
}

export default ParentForwardRef