import React, { useReducer } from 'react'

const initialState = {
    fcnt: 0
}

const reducer = (state, action) => { // state~initialstate, action ~ arg of dispatch
    switch (action.type) {
        case '+':
            return state.fcnt + action.val
        case '-':
            return state.fcnt - action.val
        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseReducerHook2() {
    const [cnt, dispatch] = useReducer(reducer, initialState) // cnt is an Object 
    return (
        <div>
            <h3>Count - {cnt.fcnt}</h3>
            {/* passing action obj */}
            <button onClick={() => dispatch({ type: '+', val: 3 })}>Increase</button>
            <button onClick={() => dispatch({ type: '-', val: 1 })}>Decrease</button>
            <button onClick={() => dispatch({ type: 'reset', val: 0 })}>Reset</button>
        </div>
    )
}

export default UseReducerHook2