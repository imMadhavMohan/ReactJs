import React, {Component} from 'react'
import Childcompo from '../Components/Childcompo'

// While importing a Child into parnt in same folder first comeout and then import '../'

class Parent extends Component{
    constructor(props){
       super(props)
       this.state = {
            parentName : 'Rc Sharma'
       }
       this.greetParent = this.greetParent.bind(this);
    }

    greetParent(arg1, arg2){
        alert(`Hi dear ${this.state.parentName} and ${arg1} ${arg2}`)
    }

    render(){
            return(
                <div>
                    <Childcompo greetHandler = {this.greetParent}></Childcompo>                                                     
                </div>
            )
    }
}

export default Parent