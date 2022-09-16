import React from 'react'
import { ContextA, ContextB } from '../Components/Contexts'

// it's very complex pyramid kindaa structure so we'll use useContext  to reduce the complexity

function Context2() {
    return (
        <div>
            <ContextA.Consumer>
                {
                    fname => {
                        return (<ContextB.Consumer>
                            {
                                lname => {
                                    return (<h1>Mt name is: {fname}{lname}</h1>)
                                }}
                        </ContextB.Consumer>)
                    }}
            </ContextA.Consumer>            
        </div>
    )
}

export default Context2