import React, {useContext} from 'react'
import {ContextA, ContextB} from '../Components/Contexts'

// We are consuming contexts using useContext Hooks
function Context3() {
   const fname = useContext(ContextA) // Returns the val to be consumed
   const lname = useContext(ContextB)

  return (
    <div>
        <h1>My Name is : {fname}{lname} Hooks</h1>
    </div>
  )
}


export default Context3