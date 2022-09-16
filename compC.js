import React, { Component } from 'react'
import { UserConsumer } from '../Components/userContext'
import {Usercontext} from '../Components/userContext'
import CompD from '../Components/compD'

class compC extends Component {
  render() {
    return (
      <div>
        Hi
        {/* Traditional way of Consuming Contxt */}
        <UserConsumer> 
            {
              user => {return <div>Hello {user.name} and your age {user.age}</div>}
            }
        </UserConsumer>  
        <CompD />      
      </div>
    )
  }
}

export default compC