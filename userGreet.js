import React, {Component} from 'react'

class Usergreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLogged: true
      }
    }

    render(){
        // 1st way
        // let msg
        // if(this.state.isLogged)
        //     msg = <div>Hello Mukund</div>
        // else 
        //     msg = <div>Hello Madhav</div>

        
        // return (
        //     <div>
        //         {msg}
        //     </div>)
            
    
    // 2nd way       
    //     if(this.state.isLogged){
    //         return (
    //             <div>
    //                 <h1>Welcome Madhav in our world</h1>
    //             </div>
    //         )
    //     }
    //     else 
    //         return (
    //             <div>
    //                 <h1>Welcome Mukund in our world</h1>
    //             </div>
    //         )

    // 3rd way

    return (this.isLogged? <div>
                        'Welcome Madhav' 
                      </div>: 
                      <div>
                        'Welcome Mohan'
                        </div>)   
    }
}

export default Usergreet