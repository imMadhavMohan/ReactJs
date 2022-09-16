import React, { Component } from 'react'

class myCnt extends Component {
    constructor(props) {
        super(props)
                  
        this.state = {
           cnt: 0
        }
        this.cntIncrement = this.cntIncrement.bind(this)
    }      
    
    cntIncrement = () => {
        // Both are correct expresion for setstate
        this.setState(prev =>  {return {cnt: prev.cnt+1}})
        // this.setState(prev =>  ({cnt: prev.cnt+1}))
    }

    render() {
        return (
            <div>
                <button>{this.props.fun(this.state.cnt, this.cntIncrement)}</button>
            </div>
        )
  }
}

export default myCnt