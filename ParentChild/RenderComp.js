import React from 'react'
import {Parent} from '../ParentChild/Parent'
import {Child} from '../ParentChild/Child'

function RenderComp() {
  return (
    <div>
        <Parent>
            <Child />
        </Parent>         
    </div>
  )
}

export default RenderComp