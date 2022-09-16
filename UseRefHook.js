import React, { useRef, useState, useEffect } from 'react';

function UseRef() {
    const [cnt,setCnt] = useState(0)
    const cntRef = useRef(0)
    const HandleClick = ()=> setCnt(prev=>prev+1)

    useEffect(()=>{cntRef.current = cntRef.current+1},[])

    return (
        <div>
            <h3 > UseRef is counting the num of times App re-reder's : {cntRef.current}</h3>
            <button onClick={HandleClick}>Click Me {cnt }</button>
        </div>
    )
}

export default UseRef