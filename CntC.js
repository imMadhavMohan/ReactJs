import React, {useContext} from 'react'
import { CountContext } from '../Components/CntA';

function CntC() {
  const Context = useContext(CountContext)
  return (
    <div>      
        Component C - {Context.countState}
        <button onClick={() => Context.countDispatch('+')}>Increment</button>
	    <button onClick={() => Context.countDispatch('+')}>Decrement</button>
	    <button onClick={() => Context.countDispatch('reset')}>Reset</button>          
    </div>
  )
}

export default CntC