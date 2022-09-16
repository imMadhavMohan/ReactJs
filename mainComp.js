import React, { Component } from 'react'
import Acomp from '../Components/compA'
import {UserProvider} from '../Components/userContext'

export class mainComp extends Component {
  render() {
    const user = {name:'Mukund Mohan', age:23}
    return (
      <div>
        <UserProvider value={user}> 
            <Acomp />
        </UserProvider>    
      </div>
    )
  }
}

export default mainComp