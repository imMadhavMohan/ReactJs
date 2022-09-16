import React, { Component } from 'react'
import LifecycleB from '../Components/LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)      
        this.state = {
           name: 'Madhav Mohan'
        }
        console.log('constructor LifecycleA')
    }  
    static getDerivedStateFromProps(props, state){ // return an object
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    render() {   
        console.log('LifecycleA rendered') 
        return (            
            <div>
                LifecycleA
                <LifecycleB/>
            </div>            
        )
  }
}

export default LifecycleA