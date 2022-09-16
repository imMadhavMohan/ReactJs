import React, { useState } from 'react'

function useStateHook() {
    const [name, nameModify] = useState('Maddy');
    const changeName = () => {
        nameModify('Madhav Mohan')
    }
    return (
        <div>
            <h1>My name is {name}</h1>
            <input type='submit' value="Click" onClick={changeName} />
        </div>
    )
}
export default useStateHook