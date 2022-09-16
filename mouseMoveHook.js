import React,{useState} from 'react'
import UseEffectHook3 from '../Components/useEffectHook3'

function MouseMoveHook() {
  const [display, setDisplay] = useState(true)  

  return (
    <div>       
        {/* onClick set the display = false & vice versa */}         
        <button onClick={() => setDisplay(!display)}>Tooggle Display</button> 
        {display && <UseEffectHook3 />}
    </div>
  )
}

export default MouseMoveHook