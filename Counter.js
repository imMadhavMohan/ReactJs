import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            count:0
        }
    }    
    increaseByone() {
        // this.setState({count: this.state.count+1},
        //      ()=>{console.log(this.state.count)})  
        
        this.setState(
          prev => (
            {
              count: prev.count + 1,
            }
          ),
          () => {
            console.log(this.state.count);
        });
    }   
    
    increaseByfive(){
        this.increaseByone();
        this.increaseByone();
        this.increaseByone();
        this.increaseByone();
        this.increaseByone();        
    }
    render() {
        return (
          <div>
            <div> count- {this.state.count} </div>            
            <button onClick={() => this.increaseByfive()}>Increment</button>
          </div>
        );
    }
}

export default Counter