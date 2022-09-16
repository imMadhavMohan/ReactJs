import React, { Component } from 'react'
import Renderfun from '../Components/RenderFun'
import Mycnt from '../Components/myCnt'
import Hover from '../Components/HoverCnt'

class RenderFunProps extends Component {
  render() {
    return (
      <div>
        <Renderfun isLogged = {(isLogin) => isLogin ? 'Allowed':'Prohibited'} />    
        <Mycnt fun={(cnt, cntIncrement)=> <Hover count={cnt} countIncrement={cntIncrement} />} />    
      </div>
    )
  }
}

export default RenderFunProps