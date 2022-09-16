import React, { useContext } from 'react'
import { CountContext } from '../Components/CntA'


function CntB() {
  const Context = useContext(CountContext)   // Returning obj as val
  return (
    <div>
        Component B - {Context.countState}
       <button onClick={()=>Context.countDispatch('+')}>Increase</button> 
       <button onClick={()=>Context.countDispatch('-')}>Decrease</button>
       <button onClick={()=>Context.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default CntB