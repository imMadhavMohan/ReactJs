import React,{useState} from 'react'

function CustomHookForm() {
  const [fname, setfName] = useState('')
  const [lname, setlName] = useState('')

  const handleSubmit = () =>{
    alert(`Fname: ${fname} & Lname: ${lname}`)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <br/>
            <label>Fname: </label>
            <input type="text" name='fname' placeholder='Enter Fname' value={fname} onChange={(e)=>setfName(e.target.value)} />
            <br/>
            <label>Lname: </label>
            <input type="text" name='fname' placeholder='Enter Lname' value={lname} onChange={(e)=>setlName(e.target.value)} />    
            <br/>
            <input type='submit' name='Submit' value='Submit'/>
        </form>        
    </div>
  )
}

export default CustomHookForm