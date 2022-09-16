import React,{useReducer} from 'react'

const Reducer = (state,action)=>{
    switch(action){
        case 'increase': 
            return state+1
        case 'decrease':
            if(state>0)
                return state-1
        case 'reset':
            return 0
        default: 
            return state
    }
}

function Renders() {
  const initialState = 0
  const [cnt, dispatch] = useReducer(Reducer, initialState)
  console.log('Reducer function')
  return (
      <div>
        <h3>My Cnt is :{cnt}</h3>
        <button onClick={()=>dispatch('increase')}>Increase</button>        
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <button onClick={()=>dispatch('decrease')}>Decrease</button>
    </div>
  )
}

export default Renders