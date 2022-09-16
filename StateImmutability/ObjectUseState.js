import React,{useState} from 'react'

const initState = {fname: 'Madhav', lname:'Mohan'}

function ObjectUseState() {
  const [person, setPerson] = useState(initState) 

  const newPersonData = () => {
    // person.fname = 'Mohan' ; common mistake that beginners do to change the 
    // person.lname = 'Madhav' ; object state to change directly

    const newPerson = {...person}
    newPerson.fname = 'Mohan'
    newPerson.lname = 'Madhav'
    setPerson(newPerson)
  }
  return (
    <div>
        <button onClick={newPersonData}>My fname: {person.fname} & lname: {person.lname}</button>
    </div>
  )
}

export default ObjectUseState