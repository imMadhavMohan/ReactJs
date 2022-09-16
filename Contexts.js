import React from 'react'
import Context1 from '../Components/Context1'

const ContextA = React.createContext()
const ContextB = React.createContext()

function Contexts() {
  return (
    <div>
        <ContextA.Provider value={'Madhav'}>
            <ContextB.Provider value={' Mohan'}>
                <Context1 />
            </ContextB.Provider>
        </ContextA.Provider>        
    </div>
  )
}

export {ContextA, ContextB}
export default Contexts