import React, { useState } from 'react'


function useStateHook5() {
    const age = 0
    const [info, setInfo] = useState({ fname: '', lname: '', age: 0})

    return (
        <form>
            <label >Fname: </label>
            <input type='text' placeholder='fname' value={info.fname} onChange={(e) => {
                setInfo(e.target.value)
            }} />
            <br/>
            <label >Lname: </label>
            <input type='text' placeholder='lname' value={info.lname} onChange={(e) => {
                setInfo(e.target.value)
            }} />
            <br/>
            <label >Age: </label>
            <input type='number' placeholder='age' value={info.age} OnChange={(e) => {                 
                setInfo(e.target.value)
            }} />
            <h1>My fname is- {info.fname}</h1>
            <h1>My lname is- {info.lname}</h1>
            <h1>My age is- {info.age}</h1>
            <h1>{JSON.stringify(info)}</h1>
            
        </form>
    )
}

export default useStateHook5