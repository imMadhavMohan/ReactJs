import React, { Component } from 'react'
import PureComp from '../Components/PureComp'
import RegularComp from '../Components/RegularComp'
import Memo from '../Components/Memo'

class Pureregular extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Maddy Mohan'
      }
    }

    componentDidMount(){
        setInterval(this.setState({
            name: 'Maddy Mohan'
        }),2000)
    }

  render() {
    console.log('Pure-Regular Component')
    return (
      <div>
        Pureregular
        {/* <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} /> */}
        <Memo props={this.state.name} />
      </div>
    )
  }
}

export default Pureregular