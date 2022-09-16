import React, { Component } from 'react';

class Welcome extends Component {
  // render(){
  //     return (
  //       <div>
  //         <h1>Welcome {this.props.name}</h1>
  //         {this.props.heroName}
  //       </div>
  //     );
  // }  
  render() {
    const { name, heroName } = this.props
    return (
      <div>
        <h1>Welcome {name}</h1>
        {heroName}
      </div>
    );
  }
}

export default Welcome;