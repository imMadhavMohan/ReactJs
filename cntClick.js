import React, {Component} from 'react';
import Hoc from '../Components/Hoc'

class CntClick extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { 
    //         count:0
    //     }
    // }    
    // increaseByone() {
    //     this.setState({count: this.state.count+1},
    //          ()=>{console.log(this.state.count)})  
        
    //     // this.setState(
    //     //   prev => (
    //     //     {
    //     //       count: prev.count + 1,
    //     //     }
    //     //   ));
    // }   

    render() {
        const {increaseByone, cnt} = this.props;
        return (
          <div>
            <div>{this.props.name} count- {cnt} </div>            
            <button onClick={increaseByone}>{cnt}-Click's</button>
          </div>
        );
    }
}

// Here we're returning Enhanced Component

export default Hoc(CntClick, 'Hey', 5)