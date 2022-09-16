import React, { Component } from 'react'

class UseRefInClass extends Component {
    interval
  constructor(props) {
    super(props)

    this.state = {
       timer: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prev => (this.setState({timer: prev.timer + 1}))) // note this
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <h1>Timer : {this.state.timer}</h1> 
        <button onClick={()=>this.componentWillUnmount()}>Pause</button>
        <button onClick={()=>this.componentDidMount()}>Resume</button> {/*or  this.componentDidMount.bind(this)*/}
      </div>
    )
  }
}

export default UseRefInClass