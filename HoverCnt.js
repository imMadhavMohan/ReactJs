import React, { Component } from 'react'

class HoverCnt extends Component {
  render() {
    const {cnt, cntIncrement} = this.props
    return (        
      <div>
            <button onMouseOver={cntIncrement}>{cnt}'s Hover </button>
      </div>
    )
  }
}

export default HoverCnt