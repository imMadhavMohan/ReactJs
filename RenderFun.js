import React, { Component } from 'react'

class RenderFun extends Component {
  render() {
    return (
      <div>
        {this.props.isLogged(true)}
      </div>
    )
  }
}

export default RenderFun