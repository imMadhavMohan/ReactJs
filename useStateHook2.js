import React, { useState } from 'react'

function useStateHook2() {
    const [cnt, setCount] = useState(0)
    const increaseByOne = () => { setCount(cnt + 1) }
    return (
        <div>
            <h1>Current Count- {cnt}</h1>
            <input type='submit' value='IncreaseCnt' onClick={increaseByOne} />
        </div>
    )
}

export default useStateHook2