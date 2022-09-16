import React, { useState } from 'react'

const initState = ['Madhav', 'Mohan']

function ArrayUseState() {
    const [person, setPerson] = useState(initState)
    const newPersonData = () => {
        const myPerson = [...initState]
        myPerson[0] = 'Mohan'
        myPerson[1] = 'Madhav'
        myPerson.push('Mohan')
        myPerson.push('Mukund')
        setPerson(myPerson)   
             
    }
    return (
        <div>
            {/* <button onClick={newPersonData}>fname: {person[0]} && lname:{person[1]}</button> */}
            <button onClick={newPersonData}>
                Names list
            </button>    
            {person.map(e=>(
                <h3 key={e}>{e}</h3>
            ))}     
        </div>
    )
}

export default ArrayUseState