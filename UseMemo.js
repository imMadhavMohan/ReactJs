import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [cntOne, setOne] = useState(0)
    const [cntTwo, setTwo] = useState(0)

    const isOdd = useMemo(e => e&1!==0, [cntOne, cntTwo])  
    // Re-renders only if cntOne & cntTwo updates
    return (
        <div>
            <h3>CntOne {cntOne} is of {isOdd(cntOne)? 'Odd':'Even'}</h3>
            <input type='text' value={cntOne} onChange={e => setOne(e.target.value)} />            
            {/* <button onClick={clickHandle}>IncreaseOne</button> */}

            <h3>CntTwo {cntTwo} is of {isOdd(cntTwo)? 'Odd':'Even'}</h3>
            <input type='text' value={cntTwo} onChange={e => setTwo(e.target.value)} />
            {/* <button onClick={clickHandle}>IncreaseTwo</button> */}
        </div>
    )
}

export default UseMemo