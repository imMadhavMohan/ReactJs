import React, { Component } from 'react'
import { Usercontext } from '../Components/userContext'

class compD extends Component {
    static contextType = Usercontext   
    
  render() {    
    return (
      <div>
        {this.context}
      </div>
    )
  }
}

export default compD