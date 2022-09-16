import React,{useState} from 'react'
import {useForm} from '../Components/useForm'

function UseFormHook() {
//   const [fname, setName] = useState('') 
//   const [lname, setLname] = useState('')
//   destructuring

  const [fname, bindFname, resetFname] = useForm('')
  const [lname, bindLname, resetLname] = useForm('')
  
  const clickHandle = (event)=>{
        event.preventDefault()    // keep data retain in input field    
        alert(`Fname : ${fname} Lname : ${lname}`)
        // resetFname()
        // resetLname()
  }

  return (
    <div>
        <form onSubmit={clickHandle}>
            {/* {...bindFname}= value={} onChange={} */}
            <label>Fname: </label>
            <input type='text' {...bindFname} />
            <br/>
            <label>Lname: </label>
            <input type='text' {...bindLname} />
            <br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UseFormHook