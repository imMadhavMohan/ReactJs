import React, { Component } from "react";

class Clickclass extends Component {
  // constructor()
  clickHandle() {
    console.log("Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>Click Me</button>
      </div>
    );
  }
}

export default Clickclass;
