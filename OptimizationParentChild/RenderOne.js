import React from 'react'
import {ParentOne} from '../OptimizationParentChild/ParentOne'
import {ChildOne} from '../OptimizationParentChild/ChildOne'

function RenderOne() {
  return (
    <div>
      {/*here the child Component is rendering again and again */}
      {/* <ParentOne Child={ChildOne} />      */}
      
       <ParentOne> {/*here the child Component isn't rendering again and again*/} 
        <ChildOne />
      </ParentOne>                  
    </div>
  )
}

export default RenderOne